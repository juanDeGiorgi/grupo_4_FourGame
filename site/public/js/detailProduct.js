const $ = id => document.getElementById(id);

window.addEventListener("load",() =>{

    // favoritos

        const buttonFavorite = $("buttonFavorite");
        const isFavorite = $("isFavorite");

        favorite = (userId,productId) =>{
            if(userId){
                console.log(productId);
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
                                    title: 'Agregado con éxito',
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
                        isFavorite.value = 0
                        buttonFavorite.classList.remove("on-fav")
                        buttonFavorite.classList.add("off-fav")
                        break;
                    default:
                        break;
                }

            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Debes iniciar sesión',
                    html: ' Inicia sesión <a href="/users/login">Aquí</a>',
                    footer: ' Si no tienes cuenta puedes crear una <a href="/users/register"> Aquí</a>'
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
})