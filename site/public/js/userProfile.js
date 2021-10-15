const $= id => document.getElementById(id);

showImage = (input,idImage) =>{
    document.getElementById(input).onchange = e =>{
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () =>{
            localStorage.setItem("pathImage",reader.result)
            document.getElementById(idImage).src = reader.result;
        }
    };

}

showImage("image","preview-image");

limpiar = (inputId,imageId,deleteId) =>{
    
    document.getElementById(inputId).value = "";
    document.getElementById(imageId).src = "/images/icon/default-image1.png";
    document.getElementById(deleteId).value = deleteId;
}

// VALIDACIONES

window.addEventListener("load",() =>{

    // forms

    const formProfile = $("formProfile");

    // inputs

    const name = $("name");


    // comprobaciones

    name.addEventListener("keyup",() =>{
        if(name.value.trim() == ''){
            name.classList.add('is-invalid')
            $('errorName').innerHTML = 'Ingresar nombre'
        }else if(name.value.length < 3){
            name.classList.add('is-invalid')
            $('errorName').innerHTML = 'el nombre debe tener al menos 3 caracteres'
        }else{
            name.classList.remove('is-invalid')
            $('errorName').innerHTML = null
        }
    })

    // enviar form

    formProfile.addEventListener("submit",e =>{
        let error = false;
        e.preventDefault();
            
        if (name.value.trim() == "") {
            $('errorName').innerHTML = 'Ingresar nombre'
            name.classList.add('is-invalid');
                
            error = true
        }

        if (!error) {
            formProfile.submit()
        }
    })

})