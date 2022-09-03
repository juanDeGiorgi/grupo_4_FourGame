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

// carrusel

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView: 3,
        spaceBetween: 40,
        freeMode: true,
        direction: 'horizontal',
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Responsive breakpoints
        breakpoints: {
            320: {
            slidesPerView: 1,
            spaceBetween: 20
            },
            500: {
            slidesPerView: 2,
            spaceBetween: 20
            },
            960: {
            slidesPerView: 3,
            spaceBetween: 40
            }
        }
    })

// forms

    const formProfile = $("formProfile");
    const buttonPass = $("changePass");

// inputs

    const name = $("name");

    const actPass = $("a-pass")
    const newPass = $("new-pass")
    const cNewPass = $("c-new-pass")

// comprobaciones

    // ACTUALIZACION DE PERFIL

        name.addEventListener("keyup",() =>{
            if(name.value.trim() == ''){
                name.classList.add('is-invalid')
                $('errorName').innerHTML = 'Ingresar nombre'
            }else if(name.value.trim().length < 3){
                name.classList.add('is-invalid')
                $('errorName').innerHTML = 'el nombre debe tener al menos 3 caracteres'
            }else{
                name.classList.remove('is-invalid')
                $('errorName').innerHTML = null
            }
        })

    // CAMBIO DE CONTRASEÑA

        actPass.addEventListener('keyup',(e)=> {

            if(actPass.value.trim() == ''){
                $('errorActPass').innerHTML = 'La contraseña es obligatoria'
                actPass.classList.add('is-invalid')
            }else{
                $('errorActPass').innerHTML = null
                actPass.classList.remove('is-invalid')
            }
        })

        newPass.addEventListener('keyup',(e)=> {

            if(newPass.value.trim() == ''){
                $('errorNewPass').innerHTML = 'La contraseña es obligatoria'
                newPass.classList.add('is-invalid')

            }else if (newPass.value.trim().length < 6){
                $("errorNewPass").innerHTML = "la contraseña tiene que tener al menos 6 caracteres"
                newPass.classList.add("is-invalid")
                
            }else{
                $('errorNewPass').innerHTML = null
                newPass.classList.remove('is-invalid')
                
            }
        })

        cNewPass.addEventListener('keyup',(e)=> {

            if (cNewPass.value != newPass.value) {
                cNewPass.classList.add("is-invalid")
                $("errorCNewPass").innerHTML = "las contraseñas no coinciden"

            }else {
                cNewPass.classList.remove("is-invalid")
                $("errorCNewPass").innerHTML = null

            }
        })



// enviar forms

    // actualizar perfil

        formProfile.addEventListener("submit",e =>{
            let error = false;
            e.preventDefault();
                
            if (name.value.trim() == "") {
                $('errorName').innerHTML = 'Ingresar nombre'
                name.classList.add('is-invalid');
                    
                error = true;
            }else if(name.value.trim().length < 3){
                $('errorName').innerHTML = 'el nombre debe tener al menos 3 caracteres'
                name.classList.add('is-invalid')

                error = true;
            }

            if (!error) {
                formProfile.submit()
            }
        })

    // cambiar contraseña

        cambiar = async id =>{
            let error = false;

            if(actPass.value.trim() == ''){
                $('errorActPass').innerHTML = 'La contraseña es obligatoria'
                actPass.classList.add('is-invalid')

                error = true;
            }

            if(newPass.value.trim() == ''){
                $('errorNewPass').innerHTML = 'La contraseña es obligatoria'
                newPass.classList.add('is-invalid')
               
                error = true;
            }else if (newPass.value.trim().length < 6){
                $("errorNewPass").innerHTML = "la contraseña tiene que tener al menos 6 caracteres"
                newPass.classList.add("is-invalid")
                
                error = true;
            }

            if (cNewPass.value != newPass.value) {
                cNewPass.classList.add("is-invalid")
                $("errorCNewPass").innerHTML = "las contraseñas no coinciden"

                error = true;
            }

            if(!error){
                let data = {
                    actPass : actPass.value,
                    newPass : newPass.value,
                    cNewPass : cNewPass.value
                }
                const options = {
                    method : "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
                try {
                    fetch(`/api/users/pass/${id}`,options)
                    .then(response => {
                        if(response.ok){
                            Swal.fire({
                                icon: 'success',
                                title: 'contraseña actualizada',
                                text: 'deberas volver a iniciar sesión',
                                confirmButtonText: "Entendido"
                            }).then(result =>{
                                if(result.isConfirmed){
                                    fetch("/api/users/logout")
                                    .then(response =>{
                                        window.location.replace("/users/login");
                                    })
                                }
                            })
                        }else{
                            console.log(response.status);
                            Swal.fire({
                                icon: 'error',
                                title: 'contraseña incorrecta',
                                text: 'intentalo de nuevo!',
                                confirmButtonText: "Entendido"
                            })
                        }
                    }).catch(err =>{
                        console.log(err);
                        Swal.fire({
                            icon: 'error',
                            title: 'algo salio mal',
                            text: 'intenta mas tarde!',
                            confirmButtonText: "Entendido"
                        })
                    })

                } catch (err) {
                    console.log(err)
                    Swal.fire({
                        icon: 'error',
                        title: 'algo salio mal',
                        text: 'intenta mas tarde!',
                        confirmButtonText: "Entendido"
                    })
                }
            }
        } 

})