
window.addEventListener("load",() =>{
        
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView: 4,
        spaceBetween: 40,
        freeMode: true,
        direction: 'horizontal',
        loop: true,    
      
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Responsive breakpoints
        breakpoints: {
            320: {
            slidesPerView: 1,
            spaceBetween: 20
            },
            500: {
            slidesPerView: 2,
            spaceBetween: 20
            },
            960: {
            slidesPerView: 4,
            spaceBetween: 40
            }
        }
    })

   
})