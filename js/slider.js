$(document).ready(function(){
  $("#reviews").owlCarousel({
    items: 2,
    loop: true,
    nav: false,
    navText: [ '<svg width="45" height="45" viewBox=""><circle cx="22.5" cy="22.5" r="22.5" fill="white"/><path d="M15 22.5L26.25 16.0048V28.9952L15 22.5Z" fill="#C4C4C4"/></svg>',
          '<svg width="45" height="45" viewBox=""><circle cx="22.5" cy="22.5" r="22.5" fill="white"/><path d="M30 22.5L18.75 16.0048V28.9952L30 22.5Z" fill="#C4C4C4"/>'],
    dots: true,
    responsiveClass:true,
    responsive:{
        0:{
          items:1,
          nav:false
        },
        767:{
          items:1,
          nav:false,
        },
        1140:{
            items:1,
            nav:true,
            loop:true
        }
    }
  });
  $("#auto").owlCarousel({
    items: 7,
    loop: true,
    nav: true,
    navText: [ '<svg width="45" height="45" viewBox=""><circle cx="22.5" cy="22.5" r="22.5" fill="#929292"/><path d="M15 22.5L26.25 16.0048V28.9952L15 22.5Z" fill="#D12C2C"/></svg>',
          '<svg width="45" height="45" viewBox=""><circle cx="22.5" cy="22.5" r="22.5" fill="#929292"/><path d="M30 22.5L18.75 16.0048V28.9952L30 22.5Z" fill="#D12C2C"/>'],
    dots: true,
    responsiveClass:true,
    responsive:{
        0:{
          items:2,
          nav:false
        },
        767:{
          items:5,
          nav:false,
        },
        1140:{
            items:6,
            nav:true,
            loop:true
        }
    }
  });
});
