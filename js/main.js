// Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
      document.querySelector('.navBar').style.opacity = 0.8;
    } else {
      document.querySelector('.navBar').style.opacity = 1;
    }
  });
  
  
  // Smooth Scrolling
  $('.navBar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    }
  });