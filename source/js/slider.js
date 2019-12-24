$('.slider-one').owlCarousel({
  loop:true,
  nav:true,
  animateOut: 'slideOutDown',
  animateIn: 'flipInX',
  items:1,
  margin:30,
  stagePadding:30,
  smartSpeed:450,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});
