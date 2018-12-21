(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

// $(() => {
//   console.log('x is ', sound);
  
  
//   $("#game-start").on('click', () => {
//     console.log('clicked');
//     // var audio = document.getElementById("audio");
//     // audio.play();

//     // new Audio('http://www.music.helsinki.fi/tmt/opetus/uusmedia/esim/a2002011001-e02.wav').play()
//     // new Audio('boopsnoot.wav').play()
//     // new Audio('../boopsnoot.wav').play()
//     // new Audio('../boopsnoot.wav').play()
    
//     setTimeout(() => {
//       console.log('5 minutes is up');
//       const audio = new Audio('midas.mp3');
//       console.log('audio is ', audio);
//       audio.play();
//     }, 5000)
//   })

  // addSound(2, 5000, './sound.mp3');


  // player.play('./sound.mp3', (err) => {
  //     if (err) console.log(`Could not play sound: ${err}`);
  // });
// });



