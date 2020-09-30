// Owl Carousel Script
$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      480: {
        items: 2,
        nav: false
      },
      1200: {
        items: 3,
        nav: false,
        loop: true
      }
    }
  }, function() {
    $('.loop').owlCarousel({
      center: true,
      items: 2
    });
  });
});


// Sticky Navigation Bar
window.onscroll = function() {
  myFunction();
};

var navbar = document.getElementById("header_navigation");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else if (window.pageYOffset < sticky) {
    navbar.classList.remove("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
