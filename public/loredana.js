/**
 * LOREDANA - Assistente Virtuale Casa Apuliae
 * Knowledge Base Chatbot
 */

(function() {
  'use strict';

  // KNOWLEDGE BASE - Informazioni complete dal sito
  var knowledgeBase = [
    {
      keywords: ['ciao', 'salve', 'buongiorno', 'buonasera', 'hey', 'hi', 'hello'],
      answer: 'Ciao! Sono Loredana, l\'assistente virtuale di Casa Apuliae. Sono qui per aiutarti con informazioni sulle nostre suite, servizi, prezzi e prenotazioni. Come posso assisterti oggi?'
    },
    // PALAZZO
    {
      keywords: ['palazzo', 'palazzo giannone alitti', 'storia', 'palazzo storico', 'edificio', 'palazzo bitonto'],
      answer: 'Casa Apuliae è situata in Palazzo Giannone Alitti, un palazzo storico nel cuore pulsante di Bitonto, custode di secoli di storia pugliese. Ci troviamo in Piazza Cattedrale 23, a pochi passi dalla splendida Concattedrale di Bitonto. Ogni dettaglio racconta una storia, dove il lusso si fonde con la tradizione.'
    },
    // SUITE FRIDA KAHLO
    {
      keywords: ['frida kahlo', 'frida', 'camera matrimoniale', 'camera deluxe'],
      answer: 'La Suite Frida Kahlo è una Camera Matrimoniale Deluxe ispirata dalla celebre pittrice messicana. È un mix di design e carattere con: bagno privato, doccia panoramica con cromoterapia, ampio spazio, ampia finestra, set cortesia, arredi ricercati e vista città. Prezzo indicativo da 120€/notte.'
    },
    {
      keywords: ['cromoterapia', 'doccia panoramica', 'doccia frida'],
      answer: 'La Suite Frida Kahlo dispone di una doccia panoramica con cromoterapia, che utilizza colori per rilassare mente e corpo durante il tuo soggiorno.'
    },
    // SUITE VIRGINIA WOOLF  
    {
      keywords: ['virginia woolf', 'virginia', 'suite virginia', 'camera virginia'],
      answer: 'La Suite Virginia Woolf è l\'incarnazione perfetta di eleganza e romanticismo. La sua atmosfera ospitale è creata da un ricercato gioco di luci soffuse che abbraccia marmi e carte da parato. Caratteristica distintiva: vasca sinuosa perfetta per bagni rilassanti a lume di candela. Con vista sulla Cattedrale, cromoterapia e bagno privato. Prezzo indicativo da 150€/notte.'
    },
    {
      keywords: ['vasca sinuosa', 'vasca virginia', 'marmi pregiati'],
      answer: 'La Suite Virginia Woolf è caratterizzata da una vasca sinuosa nelle sue forme, perfetta per bagni rilassanti a lume di candela, immersa in un ambiente con marmi pregiati e luci soffuse.'
    },
    // SUITE LADY DIANA
    {
      keywords: ['lady diana', 'diana', 'suite premium', 'camera diana', 'suite di lusso'],
      answer: 'La Suite Lady Diana è la nostra Suite Premium, l\'esperienza di puro lusso. Dispone di: vasca idromassaggio con vista sulla Concattedrale di Bitonto, sauna finlandese privata, balcone esclusivo, bagno privato con marmi pregiati, set cortesia deluxe. Prezzo indicativo da 180€/notte. Un\'esperienza di puro relax per il tuo corpo e la tua mente.'
    },
    {
      keywords: ['idromassaggio', 'vasca idromassaggio', 'vasca diana', 'sauna', 'sauna finlandese', 'sauna privata'],
      answer: 'La Suite Lady Diana offre un\'esperienza unica con vasca idromassaggio con vista panoramica sulla Concattedrale e sauna finlandese privata all\'interno della suite, per un totale relax.'
    },
    {
      keywords: ['balcone', 'balcone privato', 'terrazza'],
      answer: 'La Suite Lady Diana dispone di un balcone esclusivo privato con vista sulla Concattedrale, perfetto per godersi il panorama di Bitonto.'
    },
    // SERVIZI
    {
      keywords: ['colazione', 'mattina', 'caffe', 'cibo', 'colazione in camera'],
      answer: 'La colazione è inclusa nel prezzo! Offriamo un servizio di colazione in camera su prenotazione. Puoi goderti la colazione comodamente in camera scegliendo dal menù le tue preferenze e l\'orario, dalle 7:30 alle 10:30. Prodotti freschi e locali della tradizione pugliese.'
    },
    {
      keywords: ['pacchetto wedding', 'wedding', 'matrimonio', 'luna di miele', 'romantico', 'anniversario', 'nozze'],
      answer: 'Il nostro Pacchetto Wedding include: champagne in camera, confettata, colazione romantica. Ogni dettaglio è pensato per rendere indimenticabile il vostro giorno speciale, sia per matrimoni, lune di miele o anniversari. Perfetto per una fuga romantica a Bitonto!'
    },
    {
      keywords: ['tour', 'frantoio', 'olio', 'visita', 'degustazione', 'puglia', 'olivicola'],
      answer: 'Organizziamo visite ai frantoi storici di Bitonto con degustazione di olio EVO (Extravergine di Oliva). Un tour autentico alla scoperta della tradizione olivicola pugliese, cuore della cultura della nostra terra.'
    },
    // CARATTERISTICHE
    {
      keywords: ['vista', 'vedere', 'panorama', 'cattedrale', 'finestra', 'concattedrale', 'vista cattedrale'],
      answer: 'Tutte le nostre suite offrono viste mozzafiato: la Lady Diana ha vista diretta sulla Concattedrale di Bitonto, la Virginia Woolf vista sulla Cattedrale, e la Frida Kahlo vista città. Immagina svegliarti con la Concattedrale davanti ai tuoi occhi!'
    },
    {
      keywords: ['bagno', 'doccia', 'vasca', 'sauna', 'idromassaggio', 'bagno privato'],
      answer: 'Ogni suite ha bagno privato con caratteristiche uniche: Lady Diana (vasca idromassaggio + sauna finlandese privata), Virginia Woolf (vasca sinuosa), Frida Kahlo (doccia panoramica con cromoterapia). Set cortesia incluso in tutte le camere.'
    },
    {
      keywords: ['wifi', 'internet', 'connessione', 'rete'],
      answer: 'WiFi gratuito ad alta velocità disponibile in tutte le camere e nelle aree comuni di Casa Apuliae, senza limitazioni.'
    },
    {
      keywords: ['set cortesia', 'cortesia', 'shampoo', 'asciugamani', 'accappatoi'],
      answer: 'Ogni suite è dotata di set cortesia completo: biancheria di qualità, prodotti da bagno, accappatoi, asciugamani morbidi e tutti i comfort per il tuo soggiorno.'
    },
    // PREZZI E TARIFFE
    {
      keywords: ['prezzo', 'costo', 'tariffa', 'quanto', 'euro', '€', 'quanto costa', 'prezzi'],
      answer: 'Le tariffe variano per stagione e camera: Suite Frida Kahlo da 120€/notte, Suite Virginia Woolf da 150€/notte, Suite Lady Diana da 180€/notte. Prezzi indicativi per camera matrimoniale per notte. Contattaci per un preventivo personalizzato con le tue date esatte!'
    },
    {
      keywords: ['frida prezzo', 'costo frida', 'quanto frida', 'tariffa frida'],
      answer: 'La Suite Frida Kahlo ha un prezzo indicativo a partire da 120€/notte per camera matrimoniale, inclusa colazione. Prezzo può variare in base alla stagione.'
    },
    {
      keywords: ['virginia prezzo', 'costo virginia', 'quanto virginia', 'tariffa virginia'],
      answer: 'La Suite Virginia Woolf ha un prezzo indicativo a partire da 150€/notte per camera matrimoniale, inclusa colazione. Prezzo può variare in base alla stagione.'
    },
    {
      keywords: ['diana prezzo', 'lady diana prezzo', 'costo diana', 'quanto diana', 'tariffa diana', 'prezzo suite premium'],
      answer: 'La Suite Lady Diana (Premium) ha un prezzo indicativo a partire da 180€/notte per camera matrimoniale, inclusa colazione. Il prezzo include accesso esclusivo a idromassaggio e sauna privata.'
    },
    // ORARI E CHECK
    {
      keywords: ['check-in', 'arrivo', 'ora', 'quando arrivare', 'entro', 'orario arrivo'],
      answer: 'Check-in: dalle 14:00 alle 17:00. Check-in tardivo possibile fino alle 22:00 con preavviso (contattaci per organizzare). Check-out: entro le 11:00. Late check-out disponibile su richiesta con supplemento di 30€.'
    },
    {
      keywords: ['check-out', 'partenza', 'uscita', 'fine', 'orario partenza', 'quando uscire'],
      answer: 'Il check-out è entro le 11:00. Possibilità di late check-out su richiesta e disponibilità, con supplemento di 30€. Per check-in tardivo dopo le 17:00, contattaci in anticipo.'
    },
    {
      keywords: ['late check-out', 'uscita tarda', 'rimanere di più'],
      answer: 'Il late check-out è disponibile su richiesta e secondo disponibilità, con supplemento di 30€. Permette di rimanere in camera oltre le 11:00 standard.'
    },
    // POLITICHE
    {
      keywords: ['cancellazione', 'annulla', 'disdetta', 'rimborso', 'cancel'],
      answer: 'Politica di cancellazione: gratuita entro 7 giorni dall\'arrivo. Oltre tale termine, verrà addebitata la prima notte. Per no-show (mancata presentazione senza avviso): addebito totale del soggiorno.'
    },
    {
      keywords: ['animali', 'cane', 'gatto', 'pet', 'cani', 'gatti', 'animali domestici'],
      answer: 'Piccoli animali di piccola taglia sono i benvenuti su richiesta! Supplemento di 20€/notte. Contattaci prima della prenotazione per confermare la disponibilità e concordare i dettagli.'
    },
    {
      keywords: ['parcheggio', 'auto', 'macchina', 'posteggio', 'posto auto'],
      answer: 'Offriamo un posto auto privato gratuito a 200 metri dal palazzo. Da richiedere al momento della prenotazione. Disponibilità limitata, prenota in anticipo!'
    },
    // POSIZIONE E CONTATTI
    {
      keywords: ['posizione', 'dove', 'indirizzo', 'bitonto', 'bari', 'puglia', 'come arrivare', 'dove siete'],
      answer: 'Casa Apuliae si trova in Piazza Cattedrale 23, 2º piano, 70032 Bitonto (BA), nel cuore del centro storico di Bitonto, a pochi passi dalla Concattedrale. Bitonto è a 15 km da Bari, facilmente raggiungibile in auto o treno.'
    },
    {
      keywords: ['telefono', 'contatto', 'chiamare', 'numero', 'whatsapp', 'cellulare'],
      answer: 'Puoi contattarci al +39 347 048 5464 (anche WhatsApp) o via email a casaapuliae@libero.it. Rispondiamo entro 24 ore! Per urgenze, usa il pulsante verde WhatsApp in basso a destra.'
    },
    {
      keywords: ['email', 'mail', 'scrivi', 'indirizzo email'],
      answer: 'La nostra email è casaapuliae@libero.it. Scrivici per qualsiasi informazione, richiesta speciale o preventivo personalizzato. Rispondiamo entro 24 ore.'
    },
    // PRENOTAZIONI
    {
      keywords: ['disponibilità', 'libero', 'quando', 'date', 'calendario', 'prenotare', 'prenota', 'prenotazione', 'booking', 'verifica'],
      answer: 'Puoi prenotare direttamente chiamando al +39 347 048 5464 per risposta immediata 24/7! Oppure compila la booking bar qui sul sito con le tue preferenze. Clicca il pulsante verde in chat per chiamare o scrivere subito!'
    },
    {
      keywords: ['prenotare come', 'come prenoto', 'come faccio', 'prenotazione online', 'form', 'booking bar'],
      answer: 'Prenotare è semplice: usa la booking bar sul sito inserendo check-in, check-out, numero ospiti e camera preferita. Clicca "Verifica disponibilità" e riceverai conferma entro 24 ore. Oppure scrivici direttamente su WhatsApp al +39 347 048 5464!'
    },
    {
      keywords: ['suite', 'camera', 'stanza', 'camere', 'quante camere', 'quante suite'],
      answer: 'Casa Apuliae offre 3 suite uniche, ognuna con personalità distinta: Frida Kahlo (Camera Matrimoniale Deluxe), Virginia Woolf (Suite elegante e romantica), e Lady Diana (Suite Premium con sauna e idromassaggio). Ogni camera è stata concepita per offrire un\'esperienza irripetibile.'
    },
    // RINGRAZIAMENTI
    {
      keywords: ['grazie', 'thanks', 'thank you', 'ottimo', 'perfetto', 'bene', 'ok', 'va bene'],
      answer: 'Grazie a te! Sono felice di averti aiutato. Se hai altre domande, sono qui per te. Ti aspettiamo a Casa Apuliae per un soggiorno indimenticabile nel cuore di Bitonto!'
    },
    // AIUTO GENERICO
    {
      keywords: ['aiuto', 'help', 'assistenza', 'supporto', 'non capisco', 'come funziona'],
      answer: 'Sono qui per aiutarti! Posso rispondere su: le nostre 3 suite (Frida, Virginia, Diana), prezzi indicativi, servizi inclusi (colazione, WiFi), orari check-in/out, posizione a Bitonto, politiche di cancellazione, e come prenotare. Cosa ti interessa sapere?'
    },
    {
      keywords: ['consigli', 'suggerimenti', 'quale camera', 'quale suite', 'meglio'],
      answer: 'Per un\'esperienza romantica consiglio la Virginia Woolf con la sua vasca sinuosa. Per il massimo lusso, la Lady Diana con sauna e idromassaggio privati. Per design artistico e carattere, la Frida Kahlo. Tutte hanno vista mozzafiato! Dipende dai tuoi gusti e budget.'
    }
  ];

  // Default response
  var defaultResponse = 'Per informazioni su disponibilità e prezzi in tempo reale, ti consiglio di: 1) Compilare la booking bar qui sul sito (check-in, check-out, ospiti), oppure 2) Scrivimi su WhatsApp al +39 347 048 5464 per risposta immediata. Sono disponibile 24/7 anche su WhatsApp!';
  
  // WhatsApp link generator
  function getWhatsAppLink(question) {
    var phone = '+393470485464';
    var message = 'Ciao! Sono Loredana, l\'assistente virtuale di Casa Apuliae. L\'utente ha chiesto: "' + question + '"';
    return 'https://wa.me/' + phone + '?text=' + encodeURIComponent(message);
  }

  // Find best match
  function findAnswer(question) {
    question = question.toLowerCase();
    var bestMatch = null;
    var highestScore = 0;

    for (var i = 0; i < knowledgeBase.length; i++) {
      var item = knowledgeBase[i];
      var score = 0;
      
      for (var j = 0; j < item.keywords.length; j++) {
        if (question.indexOf(item.keywords[j]) !== -1) {
          score++;
        }
      }
      
      if (score > highestScore) {
        highestScore = score;
        bestMatch = item.answer;
      }
    }

    return highestScore > 0 ? bestMatch : defaultResponse;
  }

  // UI Elements
  var chatWidget = null;
  var chatToggle = null;
  var chatWindow = null;
  var chatMessages = null;
  var chatInput = null;
  var chatSend = null;

  // Create Chat Widget
  function createChatWidget() {
    // Container
    chatWidget = document.createElement('div');
    chatWidget.className = 'loredana-widget';
    
    // Toggle Button (WhatsApp style)
    chatToggle = document.createElement('button');
    chatToggle.className = 'loredana-toggle';
    chatToggle.innerHTML = `
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    `;
    
    // Chat Window
    chatWindow = document.createElement('div');
    chatWindow.className = 'loredana-window';
    chatWindow.innerHTML = `
      <div class="loredana-header">
        <div class="loredana-header__avatar">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        <div class="loredana-header__info">
          <h4 class="loredana-header__name">Loredana</h4>
          <p class="loredana-header__status">Assistente virtuale • Online</p>
        </div>
        <button class="loredana-header__close">×</button>
      </div>
      <div class="loredana-messages"></div>
      <div class="loredana-input">
        <input type="text" placeholder="Scrivi un messaggio..." />
        <button class="loredana-send">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"/>
            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>
    `;
    
    chatWidget.appendChild(chatToggle);
    chatWidget.appendChild(chatWindow);
    document.body.appendChild(chatWidget);
    
    // Cache elements
    chatMessages = chatWindow.querySelector('.loredana-messages');
    chatInput = chatWindow.querySelector('input');
    chatSend = chatWindow.querySelector('.loredana-send');
    var chatClose = chatWindow.querySelector('.loredana-header__close');
    
    // Events
    chatToggle.addEventListener('click', toggleChat);
    chatClose.addEventListener('click', toggleChat);
    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') sendMessage();
    });
  }

  // Toggle Chat
  function toggleChat() {
    chatWindow.classList.toggle('active');
    chatToggle.classList.toggle('hidden');
    
    if (chatWindow.classList.contains('active') && chatMessages.children.length === 0) {
      // Welcome message
      setTimeout(function() {
        addMessage('Ciao! Sono Loredana, l\'assistente virtuale di Casa Apuliae. Come posso aiutarti con la tua prenotazione?', false);
      }, 300);
    }
  }

  // Add Message
  function addMessage(text, isUser, showWhatsAppButton, originalQuestion) {
    var message = document.createElement('div');
    message.className = 'loredana-message ' + (isUser ? 'loredana-message--user' : 'loredana-message--bot');
    
    var html = '<p>' + escapeHtml(text) + '</p>';
    
    // Add WhatsApp and Call buttons if default response
    if (showWhatsAppButton && originalQuestion) {
      html += '<div class="loredana-buttons">' +
              '<a href="tel:+393470485464" class="loredana-call-btn">' +
              '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' +
              'Chiama ora' +
              '</a>' +
              '<a href="' + getWhatsAppLink(originalQuestion) + '" target="_blank" class="loredana-whatsapp-btn" rel="noopener noreferrer">' +
              '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>' +
              'WhatsApp' +
              '</a>' +
              '</div>';
    }
    
    html += '<span class="loredana-time">' + getTime() + '</span>';
    
    message.innerHTML = html;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Send Message
  function sendMessage() {
    var text = chatInput.value.trim();
    if (!text) return;
    
    addMessage(text, true);
    chatInput.value = '';
    
    // Typing indicator
    showTyping();
    
    // Response delay
    setTimeout(function() {
      hideTyping();
      var answer = findAnswer(text);
      var isDefault = (answer === defaultResponse);
      addMessage(answer, false, isDefault, text);
    }, 1000 + Math.random() * 1000);
  }

  // Typing indicator
  function showTyping() {
    var typing = document.createElement('div');
    typing.className = 'loredana-typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    typing.id = 'typing-indicator';
    chatMessages.appendChild(typing);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function hideTyping() {
    var typing = document.getElementById('typing-indicator');
    if (typing) typing.remove();
  }

  // Helpers
  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function getTime() {
    var now = new Date();
    return now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
  }

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createChatWidget);
  } else {
    createChatWidget();
  }

  // Expose for adding new knowledge
  window.Loredana = {
    addKnowledge: function(keywords, answer) {
      knowledgeBase.push({ keywords: keywords, answer: answer });
    },
    getKnowledgeBase: function() {
      return knowledgeBase;
    }
  };

})();
