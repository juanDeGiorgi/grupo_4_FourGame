const $ = id => document.getElementById(id);
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// inputs cart
    const badgeMobile = $("cartBadgeMobile")
    const titleMobile = $("offcanvasRightLabelMobile")
    const footerMobile = $("offcanvas-footer-mobile")
    const cProductMobile = $("c-products-cart-mobile");
    const pTotalMobile = $("finalPriceCartMobile")

    const badge = $("cartBadge")
    const title = $("offcanvasRightLabel")
    const body = $("offcanvas-body")
    const footer = $("offcanvas-footer")
    const cProduct = $("c-products-cart");
    const pTotal = $("finalPriceCart")

const showCart = (order) =>{
    cProduct.classList.remove("emptyCart")
    cProductMobile.classList.remove("emptyCart")

    if(order.length > 0) {
        cProduct.innerHTML = null
        cProductMobile.innerHTML = null
    }

    let Totalquantity = 0;
    let finalPrice = 0;

    order.forEach(product => {
        Totalquantity += product.quantity,
        finalPrice += product.price
        cProduct.innerHTML += `  <div id="container-p-cart" class='container-p-cart'>
        <div class='img-c-cart'>
            <img src='/images/products/${product.image}' width='100%'>
        </div>
        <div class='infoProduct-c-cart'>
            <h4 class='title-p-cart'>${product.name}</h4>
            <div class='price-product-cart'>
                <p class='t-price'>Precio :</p>
                <span class='n-price'>$ ${toThousand(product.price)}</span>
            </div>
            <div class='cantidad'>
                <p class='t-cantidad'>Cantidad :</p>
                <div class=amount-div>
                    <button id='buttonLess' onclick='changeAmount(1,${product.id})'><i class='fas fa-minus-circle'></i></button>
                    <p id='pAmount${product.id}' class='n-cantidad'>${product.quantity}</p>
                    <input id='inputAmount${product.id}' class="n-cantidad" disabled style='display: none;' value='${product.quantity}' type='number'>
                    <button id='buttonAdd' onclick="changeAmount(0,${product.id})"><i class='fas fa-plus-circle'></i></button>
                </div>
            </div>
        </div>
    </div>`

        cProductMobile.innerHTML += `  <div id="container-p-cart" class='container-p-cart'>
        <div class='img-c-cart'>
            <img src='/images/products/${product.image}' width='100%'>
        </div>
        <div class='infoProduct-c-cart'>
            <h4 class='title-p-cart'>${product.name}</h4>
            <div class='price-product-cart'>
                <p class='t-price'>Precio :</p>
                <span class='n-price'>$ ${toThousand(product.price)}</span>
            </div>
            <div class='cantidad'>
                <p class='t-cantidad'>Cantidad :</p>
                <div class=amount-div>
                    <button id='buttonLess' onclick='changeAmount(1,${product.id})'><i class='fas fa-minus-circle'></i></button>
                    <p id='pAmount${product.id}Mobile' class='n-cantidad'>${product.quantity}</p>
                    <input id='inputAmount${product.id}Mobile' class="n-cantidad" disabled style='display: none;' value='${product.quantity}' type='number'>
                    <button id='buttonAdd' onclick="changeAmount(0,${product.id})"><i class='fas fa-plus-circle'></i></button>
                </div>
            </div>
        </div>
    </div>`
    });

    if(Totalquantity > 0){
        pTotal.innerHTML = `$ ${toThousand(finalPrice)}`
        badge.innerHTML = Totalquantity
        title.innerHTML = `Carrito(${Totalquantity})`
        footer.style.display = "initial"

        pTotalMobile.innerHTML = `$ ${toThousand(finalPrice)}`
        badgeMobile.innerHTML = Totalquantity
        titleMobile.innerHTML = `Carrito(${Totalquantity})`
        footerMobile.style.display = "initial"
    }
}

const getOrderData = () =>{
    fetch(`/api/cart/show`)
    .then(response => response.json())
    .then(result =>{
        showCart(result)
    })
}

emptyCart = () =>{
    fetch("/api/cart/empty")
    .then(response => {
        if(response.ok){
            cProduct.innerHTML = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`
            cProductMobile.innerHTML = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`

            setTimeout(() => {
                cProduct.innerHTML =  `<p id="CartEmpty" class="CartEmpty">No tienes productos en el carrito</p>`
                cProductMobile.innerHTML =  `<p id="CartEmpty" class="CartEmpty">No tienes productos en el carrito</p>`

                cProduct.classList.remove("emptyCart")
                cProductMobile.classList.remove("emptyCart")
            },1000)

            cProduct.classList.add("emptyCart")
            cProductMobile.classList.add("emptyCart")

            badge.innerHTML = 0
            badgeMobile.innerHTML = 0

            title.innerHTML = `Carrito(0)`
            titleMobile.innerHTML = `Carrito(0)`

            footer.style.display = "none"
            footerMobile.style.display = "none"
        }
    })
}

changeAmount = (action,productId) =>{
    let valor = +$(`inputAmount${+productId}`).value
    switch (action) {
        case 0:
            if (valor < 90) {
                $(`inputAmount${+productId}`).value = valor + 1     
                $(`pAmount${+productId}`).innerHTML = $(`inputAmount${+productId}`).value

                $(`inputAmount${+productId}Mobile`).value = valor + 1     
                $(`pAmount${+productId}Mobile`).innerHTML = $(`inputAmount${+productId}Mobile`).value
            }
            break;
        case 1:
            if (valor > 1) {
                $(`inputAmount${+productId}`).value = valor - 1
                $(`pAmount${+productId}`).innerHTML = $(`inputAmount${+productId}`).value

                $(`inputAmount${+productId}Mobile`).value = valor - 1
                $(`pAmount${+productId}Mobile`).innerHTML = $(`inputAmount${+productId}Mobile`).value
            }
            break;

        default:
            break;
    }
}

const searchForm = $('searchForm');
const searchBar = $('searchBar');

searchForm.addEventListener('submit',e =>{
    e.preventDefault()
    let error = false

    if (searchBar.value === "") {
        error = true;
    }

    !error ? searchForm.submit() : null
})

getOrderData()