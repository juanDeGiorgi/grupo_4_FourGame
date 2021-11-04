
window.addEventListener("load",() =>{
        
    const swiper0 = new Swiper('.swiper0', {
        // Optional parameters
        slidesPerView: 4,
        spaceBetween: 40,
        freeMode: true,
        direction: 'horizontal',
        loop: true,    
      
        // Navigation arrows
        navigation: {
            nextEl: '#swiper-button-next',
            prevEl: '#swiper-button-prev',
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

    const swiper1 = new Swiper('.swiper1', {
        // Optional parameters
        slidesPerView: 4,
        spaceBetween: 40,
        freeMode: true,
        direction: 'horizontal',
        loop: true,    
      
        // Navigation arrows
        navigation: {
            nextEl: '#swiper-button-next-1',
            prevEl: '#swiper-button-prev-1',
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

    const swiper2 = new Swiper('.swiper2', {
        // Optional parameters
        slidesPerView: 4,
        spaceBetween: 40,
        freeMode: true,
        direction: 'horizontal',
        loop: true,    
      
        // Navigation arrows
        navigation: {
            nextEl: '#swiper-button-next-2',
            prevEl: '#swiper-button-prev-2',
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