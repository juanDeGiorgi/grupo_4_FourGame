const $ = id => document.getElementById(id);

window.addEventListener("load",() =>{

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