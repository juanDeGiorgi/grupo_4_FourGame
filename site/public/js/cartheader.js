const $ = id => document.getElementById(id);

// inputs cart
    const badge = $("cartBadge")
    const title = $("offcanvasRightLabel")
    const body = $("offcanvas-body")

const showCart = (order) =>{
    let quantity = 0;
    let finalPrice = 0;
    order.forEach(product => {
        quantity += product.quantity,
        finalPrice += product.price
    });

    if(quantity == 0){
        
    }else{
        badge.innerHTML = quantity
        title.innerHTML = `Carrito(${quantity})`
    }
}

const getOrderData = () =>{
    fetch("/api/cart/show")
    .then(response => response.json())
    .then(result =>{
        showCart(result)
    })
}

getOrderData()