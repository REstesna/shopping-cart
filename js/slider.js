

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,
//   slidesPerView: 'auto',
//   centeredSlides: false,
//   initialSlide: 5,
//   loopAdditionalSlides: 2,

//     coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 250,
//         modifier: 1.2,
//         slideShadows: false,
//     },


//   navigation: {
//     nextEl: '#s-next',
//     prevEl: '#s-prev',
//   },
// });
  
 



let swiper = new Swiper('.swiper', {

  // Optional parameters
  effect: "coverflow",
  gragCursor: true,
  centeredSlides: true,
  direction: 'horizontal',

   slidesPerView: "auto",
   spaceBetween: 30,


   autoplay: {
   delay: 5000,
    },

  pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },

    navigation: {
      nextEl: '#s-next',
      prevEl: '#s-prev',
    },

    grabCursor: true,
});
  
// setTimeout ( () => {
//   swiper.init()
// } , 1000)

window.addEventListener('DOMContentLoaded', () => {
  swiper.update()
  swiper.init()
})