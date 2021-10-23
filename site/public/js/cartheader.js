const $ = id => document.getElementById(id);
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// inputs cart
    const badge = $("cartBadge")
    const title = $("offcanvasRightLabel")
    const body = $("offcanvas-body")
    const cProduct = $("c-products-cart");

const showCart = (order) =>{
    let quantity = 0;
    let finalPrice = 0;
    console.log(order);
    order.forEach(product => {
        quantity += product.quantity,
        finalPrice += product.price
        cProduct.innerHTML += `  <div class='container-p-cart'>
        <div class='img-c-cart'>
            <img src='/images/products/${product.image}' width='100%'>
        </div>
        <div class='infoProduct-c-cart'>
            <h4 class='title-p-cart'>${product.name}</h4>
            <div class='price-product-cart'>
                <p class='t-price'>Precio :</p>
                <span class='n-price'>$${toThousand(product.price)}</span>
            </div>
            <div class='cantidad'>
                <p class='t-cantidad'>Cantidad :</p>
                <button id='buttonLess' onclick='changeAmount(1)'><i class='fas fa-minus-circle'></i></button>
                <p  id='pAmount' class='n-cantidad'>${quantity}</p>
                <input id='inputAmount' class="n-cantidad" disabled style='display: none;' value='${quantity}' type='number'>
                <button id='buttonAdd' onclick="changeAmount(0)"><i class='fas fa-plus-circle'></i></button>
            </div>
        </div>
    </div>`
    });

  
    badge.innerHTML = quantity
    title.innerHTML = `Carrito(${quantity})`
}

const getOrderData = () =>{
    fetch("/api/cart/show")
    .then(response => response.json())
    .then(result =>{
        showCart(result)
    })
}

getOrderData()