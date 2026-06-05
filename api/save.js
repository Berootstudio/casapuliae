// API Serverless per salvare su GitHub
// Deploy su Vercel: https://vercel.com

export default async function handler(req, res) {
  // Solo POST permesso
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { filename, content, message } = req.body;
    
    // Verifica dati
    if (!filename || !content) {
      return res.status(400).json({ error: 'Missing filename or content' });
    }

    // Token GitHub da variabile d'ambiente (sicuro)
    const token = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_OWNER || 'Berootstudio';
    const repo = process.env.GITHUB_REPO || 'casapuliae';
    
    if (!token) {
      return res.status(500).json({ error: 'GitHub token not configured' });
    }

    // Ottieni SHA del file esistente (se esiste)
    let sha = null;
    try {
      const getResponse = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${filename}`,
        {
          headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        }
      );
      
      if (getResponse.ok) {
        const fileData = await getResponse.json();
        sha = fileData.sha;
      }
    } catch (e) {
      // File non esiste, lo creiamo
    }

    // Prepara il contenuto (Base64)
    const contentBase64 = Buffer.from(content).toString('base64');

    // Commit su GitHub
    const commitResponse = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${filename}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: message || `Aggiornamento ${filename} da admin`,
          content: contentBase64,
          sha: sha,
          branch: 'main'
        })
      }
    );

    if (!commitResponse.ok) {
      const error = await commitResponse.json();
      throw new Error(error.message || 'GitHub API error');
    }

    const result = await commitResponse.json();
    
    return res.status(200).json({
      success: true,
      message: 'File salvato su GitHub',
      commit: result.commit.sha,
      url: result.content.html_url
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Failed to save',
      details: error.message
    });
  }
}
