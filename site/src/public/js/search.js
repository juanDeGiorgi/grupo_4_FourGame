window.addEventListener("load",() =>{

    const checkPriceMin = document.getElementById("price-filter-min");
    const checkPriceMax = document.getElementById("price-filter-max");

    const checkTypePc = document.getElementById("type-filter-pc");
    const checkTypeJuegos = document.getElementById("type-filter-juegos");
    const checkTypeConsolas = document.getElementById("type-filter-consolas");

    const allQuery = new URLSearchParams(location.search);
    const priceQuery = allQuery.get("price")
    const typeQuery = allQuery.get("typeId")

    if(priceQuery == "ASC"){
        checkPriceMin.classList.remove("check-off")
        checkPriceMin.classList.add("check-on")
    }

    if(priceQuery == "DESC"){
        checkPriceMax.classList.remove("check-off")
        checkPriceMax.classList.add("check-on")
    }

    if(typeQuery == "1"){
        checkTypeConsolas.classList.remove("check-off")
        checkTypeConsolas.classList.add("check-on")
    }
    
    if(typeQuery == "2"){
        checkTypeJuegos.classList.remove("check-off")
        checkTypeJuegos.classList.add("check-on")
    }
    
    if(typeQuery == "3"){
        checkTypePc.classList.remove("check-off")
        checkTypePc.classList.add("check-on")
    }

})