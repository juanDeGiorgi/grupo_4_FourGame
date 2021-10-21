const $ = id => document.getElementById(id);

window.addEventListener("load",() =>{

    // favoritos

        const buttonFavorite = $("buttonFavorite");
        const isFavorite = $("isFavorite");

        favorite = (userId,productId,action) =>{
            if(userId){
                console.log(action.value);
                switch (+action.value) {
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
                                action.value = 1
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
        
                                action.value = 0
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
})