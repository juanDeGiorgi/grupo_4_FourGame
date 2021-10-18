const $ = id => document.getElementById(id);

window.addEventListener("load",() =>{

    // favoritos

        const buttonFavorite = $("buttonFavorite");
        const isFavorite = $("isFavorite");

        favorite = () =>{
            switch (+isFavorite.value) {
                case 0:
                    isFavorite.value = 1
                    buttonFavorite.classList.remove("off-fav")
                    buttonFavorite.classList.add("on-fav")
                    console.log(1);
                    break;

                case 1:
                    isFavorite.value = 0
                    buttonFavorite.classList.remove("on-fav")
                    buttonFavorite.classList.add("off-fav")
                    console.log(0);
                    break;

                default:
                    break;
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