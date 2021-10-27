
window.addEventListener("load",() =>{

    // favoritos

        const buttonFavorite = $("buttonFavorite");
        const isFavorite = $("isFavorite");

        favorite = (userId,productId) =>{
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


    // cantidad del producto
    
        const inputAmount = $("inputAmount")
        const buttonLess = $("buttonLess")
        const buttonAdd = $("buttonAdd")
        const pAmount = $("pAmount")

        changeAmount = (action) =>{
            let valor = +inputAmount.value
            switch (action) {
                case 0:
                    if (valor < 90) {
                        inputAmount.value = valor + 1     
                        pAmount.innerHTML = inputAmount.value
                    }
                    break;
                case 1:
                    if (valor > 1) {
                        inputAmount.value = valor - 1
                        pAmount.innerHTML = inputAmount.value
                    }
                    break;

                default:
                    break;
            }
        }


    // Agregar al carrito 
       
        addProduct = (userId,productId,action) => {
            console.log(+inputAmount.value);
            if(userId){
                const data = {
                    userId: +userId,
                    productId: +productId,
                    productQuantity: +inputAmount.value
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