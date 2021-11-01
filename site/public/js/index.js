
window.addEventListener("load",() =>{

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView: 4,
        spaceBetween: 40,
        freeMode: true,
        direction: 'horizontal',
        loop: true,    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        
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

    // favoritos


        favorite = (userId,productId) =>{
            const isFavorite = $(`isFavorite${productId}`)
            const buttonFavorite = $(`buttonFavorite${productId}`)

            if(userId){
                switch (+isFavorite.value) {
                    case 0:
                        let data ={ userId:+userId, productId:+productId }
                        let options = {
                            method : 'POST',
                            headers : {'Content-Type': 'application/json'},
                            body : JSON.stringify(data)
                        }
                        fetch('/api/users/createFav',options)
                        .then(result => {
                            if(result.ok){
                                isFavorite.value = 1
                                buttonFavorite.classList.remove("off-fav")
                                buttonFavorite.classList.add("on-fav")
                                console.log(buttonFavorite);
                              
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Favorito agregado',
                                    text: "puedes verlo ingresando en tu perfil",
                                    confirmButtonText : 'Entendido'
                                })
                            }else{
                                Swal.fire({
                                    icon: 'error',
                                    title: 'algo salio mal',
                                    text: 'intenta mas tarde!',
                                    confirmButtonText: "Entendido"
                                })
                            }
                        }).catch(err=> {
                            console.log(err)
                            Swal.fire({
                                icon: 'error',
                                title: 'algo salio mal',
                                text: 'intenta mas tarde!',
                                confirmButtonText: "Entendido"
                            })
                        })
                        break;
    
                    case 1:
                        let data2  = {
                            userId : +userId,
                            productId : +productId 
                        }
                        let options2 = {
                            method : 'DELETE',
                            headers : {
                                'Content-Type' : 'application/json'
                            },
                            body : JSON.stringify(data2)
                        }
                        fetch('/api/users/deletefav',options2)
                        .then(response => {
                            if(response.ok){
                                isFavorite.value = 0
                                buttonFavorite.classList.remove("on-fav")
                                buttonFavorite.classList.add("off-fav")

                                Swal.fire({
                                    icon: 'success',
                                    title: 'Favorito eliminado',
                                    confirmButtonText : 'Entendido'
                                })
                            }else{
                                Swal.fire({
                                    icon: 'error',
                                    title: 'algo salio mal',
                                    text: 'intenta mas tarde!',
                                    confirmButtonText: "Entendido"
                                })
                            }
                        }).catch(err=>{
                            console.log(err);
                            Swal.fire({
                                icon: 'error',
                                title: 'algo salio mal',
                                text: 'intenta mas tarde!',
                                confirmButtonText: "Entendido"
                            })
                        })

                        break;
                    default:
                        Swal.fire({
                            icon: 'error',
                            title: 'algo salio mal',
                            text: 'intenta mas tarde!',
                            confirmButtonText: "Entendido"
                        })
                        break;
                }
            }else{
                Swal.fire({
                    icon: 'warning',
                    title: 'Debes iniciar sesión',
                    html: ' inicia sesión para poder aregar favoritos puedes hacerlo <a href="/users/login">Aquí</a>',
                    confirmButtonText: "Entendido"
                })
            }
        }
})