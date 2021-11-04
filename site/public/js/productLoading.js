let allowedExtensions = /(.jpg|.jpeg|.png|.gif|.webp)$/i;


window.addEventListener('load', e =>{

    showImage = (input,idImage) =>{
        document.getElementById(input).onchange = e =>{
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = () =>{
                // document.getElementById(idImage).src = reader.result;
                
                if(!allowedExtensions.exec(e.target.files[0].name)){
                    document.getElementById(idImage).src = "/images/icon/danger.svg";
                }else{
                    localStorage.setItem("pathImage",reader.result)
                    document.getElementById(idImage).src = reader.result;
                }
            }
        };
    
    }
    
    
    
    showImage("image","preview-image");
    showImage("image1","preview-image1");
    showImage("image2","preview-image2");
    showImage("image3","preview-image3");
    showImage("image4","preview-image4");
    
    
    limpiar = (inputId,imageId,deleteId) =>{
    
        document.getElementById(inputId).value = "";
        document.getElementById(imageId).src = "/images/icon/default-image1.png";
        if(deleteId){
            document.getElementById(deleteId).value = deleteId;
        }
    }

      // formulario
      const form = $("formProduct");

      // inputs
      const images = [$("image"),$("image1"),$("image2"),$("image3"),$("image4")];
      const name = $("name");
      const price = $("price");
      const discount = $("discount");
      const description = $("description");
      const typeProduct = $('typeProduct');
      const categoryProduct = $('categoryProduct');

    description.addEventListener("input", event => {
        const target = event.currentTarget;
        const maxLength = target.getAttribute("maxlength"); // Toma el valor del atributo del html, maximo del string permitido.
        const currentLength = target.value.length;   // Longitud actual del string, capturada con el evento
        $('contador').innerHTML = `Actual: ${currentLength}/Restante ${maxLength - currentLength}`
        if (currentLength >= maxLength) { // Si el string ingresado es mayor o igual al maximo muestra la advertencia
            $('errorDescription').innerHTML="llegaste al máximo de caracteres";
            
        }else {
            $('errorDescription').innerHTML= null
        }
    });

    name.addEventListener('keyup', ()=> {
        if(name.value.trim() == ''){
            name.classList.add('is-invalid')
            $('errorName').innerHTML = 'Debes ingresar un nombre'

        }else if(Number.isInteger(parseInt(name.value))){
            name.classList.add('is-invalid')
            $('errorName').innerHTML = 'Ingresar solo letras'

        }else if(name.value.trim().length < 5){
            name.classList.add('is-invalid')
            $('errorName').innerHTML = 'El nombre debe tener al menos 5 letras'
        }else{
            name.classList.remove('is-invalid')
            $('errorName').innerHTML = null
        }
    })
  
    price.addEventListener('keyup',()=> {
        if(price.value.trim()==''){
            price.classList.add('is-invalid')
            $('errorPrice').innerHTML = 'Debes ingresar un precio'
        }else if(!Number.isInteger(parseInt(price.value))){
            price.classList.add('is-invalid')
            $('errorPrice').innerHTML = 'Ingresar solo numeros'
        }else{
            price.classList.remove('is-invalid')
            $('errorPrice').innerHTML  =null 
        }
    })

    discount.addEventListener('keyup',()=> {
        if( discount.value.trim() != '' && !Number.isInteger(parseInt(discount.value))){
            discount.classList.add('is-invalid')
            $('errorDiscount').innerHTML = 'Ingresar solo numeros'
        }else if(discount.value.trim() != '' && discount.value > 100){
            discount.classList.add('is-invalid')
            $('errorDiscount').innerHTML = 'El descuento no puede ser mayor al 100%'
        }else{
            discount.classList.remove('is-invalid')
            $('errorDiscount').innerHTML = null 
        }
    })

    description.addEventListener('keyup', ()=> {
        if(description.value.trim() == ''){
            description.classList.add('is-invalid')
            $('errorDescription').innerHTML = 'Debes ingresar una decripcion'
        }else if(Number.isInteger(parseInt(description.value))){
            description.classList.add('is-invalid')
            $('errorDescription').innerHTML = 'Ingresar solo letras'
        }else if(description.value.trim().length < 20){
            description.classList.add('is-invalid')
            $('errorDescription').innerHTML = 'La descripcion tiene que tener un minimo 20 caracteres'
        }else{
            description.classList.remove('is-invalid')
            $('errorDescription').innerHTML = null
        }
    })

    // typeProduct.addEventListener('')

  
    // desabilitar el formulario
    form.addEventListener("submit",e => {
        e.preventDefault()
        let error = false;

        if(name.value.trim() == ''){
            name.classList.add('is-invalid')
            $('errorName').innerHTML = 'Debes ingresar un nombre'
            error = true
            
        }else if(Number.isInteger(parseInt(name.value))){
            name.classList.add('is-invalid')
            $('errorName').innerHTML = 'Ingresar solo letras'
            error = true
        }else if(name.value.trim().length < 5){
            name.classList.add('is-invalid')
            $('errorName').innerHTML = 'El nombre debe tener al menos 5 letras'
            error = true
        }

        if(price.value.trim()==''){
            price.classList.add('is-invalid')
            $('errorPrice').innerHTML = 'Debes ingresar un precio'
            error = true
        }else if(!Number.isInteger(parseInt(price.value))){
            price.classList.add('is-invalid')
            $('errorPrice').innerHTML = 'Ingresar solo numeros'
            error = true
        }

        if( discount.value.trim() != '' && !Number.isInteger(parseInt(discount.value))){
            discount.classList.add('is-invalid')
            $('errorDiscount').innerHTML = 'Ingresar solo numeros'
            error = true
        }else if(discount.value.trim() != '' && discount.value > 100){
            discount.classList.add('is-invalid')
            $('errorDiscount').innerHTML = 'El descuento no puede ser mayor al 100%'
            error = true
        }

        if(description.value.trim() == ''){
            description.classList.add('is-invalid')
            $('errorDescription').innerHTML = 'Debes ingresar una decripcion'
            error = true
        }else if(Number.isInteger(parseInt(description.value))){
            description.classList.add('is-invalid')
            $('errorDescription').innerHTML = 'Ingresar solo letras'
            error = true
        }else if(description.value.trim().length < 20){
            description.classList.add('is-invalid')
            $('errorDescription').innerHTML = 'La descripcion tiene que tener un minimo 20 caracteres'
            error = true
        }

        if(typeProduct.value == ''){
            typeProduct.classList.add('is-invalid')
            $('errorType').innerHTML = 'Debes selecionar un tipo de producto'
            error = true
        }

        if(categoryProduct.value == ''){
            categoryProduct.classList.add('is-invalid')
            $('errorCategory').innerHTML = 'Debes selecionar una categoria'
            error = true
        }

        if(!error){
            form.submit()
        }

    });

})





