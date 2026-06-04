(function () {
  'use strict';

  /* =====================================
     HERO CAROUSEL
     ===================================== */
  var slides = document.querySelectorAll('.hero-carousel__slide');
  var dots = document.querySelectorAll('.hero-carousel__dot');
  var prevArrow = document.querySelector('.hero-carousel__arrow--prev');
  var nextArrow = document.querySelector('.hero-carousel__arrow--next');
  var heroTitle = document.querySelector('.hero__title');
  var heroSub = document.querySelector('.hero__sub');
  var currentSlide = 0;
  var slideCount = slides.length;
  var autoplayInterval;

  // Testi per ogni slide
  var slideTexts = [
    { title: 'Un soggiorno<br /><em>senza tempo</em>', sub: 'Suite di lusso nel cuore del centro storico, con vista mozzafiato sulla Concattedrale di Bitonto.' },
    { title: 'Palazzo<br /><em>Giannone Alitti</em>', sub: 'Secoli di storia pugliese racchiusi in un palazzo nobiliare nel cuore pulsante di Bitonto.' },
    { title: 'Suite<br /><em>Frida Kahlo</em>', sub: 'Design e carattere. Doccia panoramica con cromoterapia, arredi ricercati e bagno privato.' },
    { title: 'Arte e<br /><em>creatività</em>', sub: 'Ogni dettaglio è pensato per ispirare, dalla luce naturale agli arredi unici.' },
    { title: 'Suite<br /><em>Virginia Woolf</em>', sub: 'Eleganza e romanticismo. Vasca sinuosa, luci soffuse, marmi pregiati e vista sulla Cattedrale.' },
    { title: 'Spazi<br /><em>raffinati</em>', sub: 'Atmosfera ospitale e delicata, creata da un ricercato gioco di luci e materiali pregiati.' },
    { title: 'Suite<br /><em>Lady Diana</em>', sub: 'Vasca idromassaggio con vista sulla Concattedrale, sauna finlandese privata e balcone esclusivo.' },
    { title: 'Lusso e<br /><em>benessere</em>', sub: 'Un\'esperienza di puro relax con ogni comfort per il tuo corpo e la tua mente.' },
    { title: 'Colazione<br /><em>in camera</em>', sub: 'Inizia la giornata con cura. Goditi la colazione comodamente in camera, su prenotazione.' },
    { title: 'Casa<br /><em>Apuliae</em>', sub: 'Dove lusso e tradizione pugliese si incontrano per regalarti un soggiorno indimenticabile.' }
  ];

  function showSlide(index) {
    slides.forEach(function(slide, i) {
      slide.classList.remove('active');
      dots[i].classList.remove('active');
    });
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    // Update text with fade effect
    if (heroTitle && heroSub) {
      heroTitle.style.opacity = '0';
      heroSub.style.opacity = '0';
      
      setTimeout(function() {
        heroTitle.innerHTML = slideTexts[index].title;
        heroSub.textContent = slideTexts[index].sub;
        heroTitle.style.opacity = '1';
        heroSub.style.opacity = '1';
      }, 300);
    }
    
    currentSlide = index;
  }

  function nextSlide() {
    var next = (currentSlide + 1) % slideCount;
    showSlide(next);
  }

  function prevSlide() {
    var prev = (currentSlide - 1 + slideCount) % slideCount;
    showSlide(prev);
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // Click sui dots
  dots.forEach(function(dot, index) {
    dot.addEventListener('click', function() {
      stopAutoplay();
      showSlide(index);
      startAutoplay();
    });
  });

  // Click sulle frecce
  if (prevArrow) {
    prevArrow.addEventListener('click', function() {
      stopAutoplay();
      prevSlide();
      startAutoplay();
    });
  }

  if (nextArrow) {
    nextArrow.addEventListener('click', function() {
      stopAutoplay();
      nextSlide();
      startAutoplay();
    });
  }

  // Inizializza
  if (slides.length > 0) {
    // Add transition for text
    if (heroTitle) heroTitle.style.transition = 'opacity 0.3s ease';
    if (heroSub) heroSub.style.transition = 'opacity 0.3s ease';
    showSlide(0);
    startAutoplay();
  }

  /* =====================================
     SERVIZI CAROUSEL
     ===================================== */
  var servicesTrack = document.querySelector('.services-carousel__track');
  var servicesPrev = document.querySelector('.services-carousel__arrow--prev');
  var servicesNext = document.querySelector('.services-carousel__arrow--next');
  
  if (servicesTrack && servicesPrev && servicesNext) {
    var services = servicesTrack.querySelectorAll('.service');
    var currentServiceIndex = 0;
    var totalServices = services.length;
    var servicesVisible = window.innerWidth > 900 ? 3 : (window.innerWidth > 600 ? 2 : 1);
    var maxIndex = Math.max(0, totalServices - servicesVisible);
    
    function updateServicesCarousel() {
      var serviceWidth = services[0].offsetWidth + 40; // width + gap
      servicesTrack.style.transform = 'translateX(-' + (currentServiceIndex * serviceWidth) + 'px)';
      
      // Update arrow states
      servicesPrev.disabled = currentServiceIndex === 0;
      servicesNext.disabled = currentServiceIndex >= maxIndex;
    }
    
    servicesPrev.addEventListener('click', function() {
      if (currentServiceIndex > 0) {
        currentServiceIndex--;
        updateServicesCarousel();
      }
    });
    
    servicesNext.addEventListener('click', function() {
      if (currentServiceIndex < maxIndex) {
        currentServiceIndex++;
        updateServicesCarousel();
      }
    });
    
    // Handle resize
    window.addEventListener('resize', function() {
      servicesVisible = window.innerWidth > 900 ? 3 : (window.innerWidth > 600 ? 2 : 1);
      maxIndex = Math.max(0, totalServices - servicesVisible);
      if (currentServiceIndex > maxIndex) currentServiceIndex = maxIndex;
      updateServicesCarousel();
    });
    
    // Initialize
    updateServicesCarousel();
  }

  /* =====================================
     MAGNETIC BUTTONS
     ===================================== */
  var magneticElements = document.querySelectorAll('.btn-gold, .btn-outline-gold, .navbar__link');
  
  magneticElements.forEach(function(el) {
    el.addEventListener('mousemove', function(e) {
      var rect = el.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      
      el.style.transform = 'translate(' + (x * 0.3) + 'px, ' + (y * 0.3) + 'px)';
    });
    
    el.addEventListener('mouseleave', function() {
      el.style.transform = 'translate(0, 0)';
    });
  });

  /* =====================================
     SMOOTH SCROLL
     ===================================== */
  var scrollY = 0;
  var targetY = 0;
  var ease = 0.1;
  
  function smoothScroll() {
    scrollY += (targetY - scrollY) * ease;
    window.scrollTo(0, scrollY);
    requestAnimationFrame(smoothScroll);
  }
  
  // Simple smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* Navbar scroll effect */
  var navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  /* Booking form handler - placeholder per channel manager */
  function setupBookingForm(formId, suffix) {
    var form = document.getElementById(formId);
    if (!form) return;

    var today = new Date().toISOString().split('T')[0];
    var checkinInput = document.getElementById('checkin' + suffix);
    var checkoutInput = document.getElementById('checkout' + suffix);

    /* Set min date to today */
    if (checkinInput) checkinInput.min = today;
    if (checkoutInput) checkoutInput.min = today;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var checkin = checkinInput ? checkinInput.value : '';
      var checkout = checkoutInput ? checkoutInput.value : '';
      var guests = document.getElementById('guests' + suffix);
      var room = document.getElementById('room' + suffix);

      /* Validazione date */
      if (checkin && checkout) {
        var start = new Date(checkin);
        var end = new Date(checkout);
        if (end <= start) {
          alert('La data di check-out deve essere successiva al check-in.');
          return;
        }
      }

      /* TODO: Collegare al channel manager */
      console.log('Booking request:', {
        checkin: checkin,
        checkout: checkout,
        guests: guests ? guests.value : '',
        room: room ? room.value : ''
      });
      alert('Grazie per la richiesta! Ti contatteremo presto per confermare la disponibilità.');
    });
  }

  /* Setup forms */
  setupBookingForm('booking-form', '');
  setupBookingForm('booking-form-cta', '-cta');

})();
