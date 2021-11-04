
window.addEventListener("load",() =>{

    // carrusel
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

    // eliminar producto

        const formDelete = $('formDelete');

        if (formDelete) {
            formDelete.addEventListener('submit',e =>{
                e.preventDefault();
    
                Swal.fire({
                    title: 'estas seguro que quieres eliminar este producto ?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#372aad',
                    cancelButtonColor: '#f70303',
                    confirmButtonText: 'Confirmar',
                    cancelButtonText: 'Cancelar'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        formDelete.submit()
                        Swal.fire({
                            title: 'Producto eliminado',
                            icon : 'success',
                            confirmButtonText: 'Entendido'
                        })
                    }
                })
            })
        }

    // favoritos

        const buttonFavorite = $("buttonFavorite");
        const isFavorite = $("isFavorite");

        addFavorite = (userId,productId) => {
            if(userId){
                console.log(isFavorite.value);
                switch (+isFavorite.value) {
                    case 0:
                        let data ={userId:+userId,productId:+productId}
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
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Favorito eliminado',
                                    confirmButtonText : 'Entendido'
                                  })
        
                                isFavorite.value = 0
                                buttonFavorite.classList.remove("on-fav")
                                buttonFavorite.classList.add("off-fav")

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



    // Agregar al carrito 
       
        addProduct = (userId,productId,action) => {
            console.log(+$(`inputAmount0`).value);
            if(userId){
                const data = {
                    userId: +userId,
                    productId: +productId,
                    productQuantity: +$(`inputAmount0`).value
                }
                const options = {
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify(data)
                }
                fetch('/api/cart/createOrder',options)
                .then(response=> {
                    if(response.ok){
                        if(action == 1){
                            Swal.fire({
                                icon: 'success',
                                title: 'Producto agregado',
                                text: "seras redireccionado a la pasarela de pago",
                                confirmButtonText : 'Entendido'
                            }).then(result =>{
                                result.isConfirmed ? window.location.replace("/cart") : null
                            })
                        }else{
                            Swal.fire({
                                icon: 'success',
                                title: 'Producto agregado',
                                text: "Puedes verlo en tu carrito",
                                confirmButtonText : 'Entendido'
                            })
                            getOrderData()
                        }
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: 'algo salio mal',
                            text: 'intenta mas tarde!',
                            confirmButtonText: "Entendido"
                        })
                        console.log(response.status);
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
            }else{
                Swal.fire({
                    icon: 'warning',
                    title: 'Debes iniciar sesión',
                    html: ' inicia sesión para agregar un producto <a href="/users/login">Aquí</a>',
                    confirmButtonText: "Entendido"
                })
            }
        }
        
})