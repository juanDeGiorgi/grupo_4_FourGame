
let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

let listEmails;
const emailVerify = async() =>{
    try {
        
        const response = await fetch("/api/users/emails");
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

emailVerify().then(array =>{
    listEmails = array
})

window.addEventListener("load",() =>{

    // FORMULARIOS
    const form = $("register-form"); 

    // CAMPOS A VALIDAR
    const inputName = $("name");
    const inputEmail = $("email");
    const inputPass = $("password");
    const inputPass2 = $("password2");
    const eyePass =  $('eye-pass');
    const eyePass2 =  $('eye-pass2');
    
    // mostrar contraseña
    eyePass.addEventListener('click', e =>{
        e.preventDefault();
        if (+eyePass.value === 0) {
            inputPass.type = 'text'  
            eyePass.value = 1
            eyePass.classList.remove('pass-off')
            eyePass.classList.add('pass-on')
        }else{
            inputPass.type = 'password'  
            eyePass.value = 0
            eyePass.classList.remove('pass-on')
            eyePass.classList.add('pass-off')
        }
    })

    eyePass2.addEventListener('click', e =>{
        e.preventDefault();
        if (+eyePass2.value === 0) {
            inputPass2.type = 'text'  
            eyePass2.value = 1
            eyePass2.classList.remove('pass-off')
            eyePass2.classList.add('pass-on')
        }else{
            inputPass2.type = 'password'  
            eyePass2.value = 0
            eyePass2.classList.remove('pass-on')
            eyePass2.classList.add('pass-off')
        }
    })

    // VALIDACIONES
    inputName.addEventListener("keyup",() =>{

        if(inputName.value.trim() == ""){
            inputName.classList.add("is-invalid")
            $("error-name").innerHTML = "el nombre es obligatorio"
        }else if(inputName.value.trim().length < 3){
            inputName.classList.add("is-invalid")
            $("error-name").innerHTML = "el nombre debe tener al menos 3 caracteres"
        }else{
            inputName.classList.remove("is-invalid")
            $("error-name").innerHTML = null
        }

    })

    inputEmail.addEventListener("keyup",() =>{

        if (!regExEmail.test(inputEmail.value)) {
            inputEmail.classList.add("is-invalid")
            $("error-email").innerHTML = "Debes ingresar un email válido"
        }else if(listEmails.includes(inputEmail.value.trim())){
            inputEmail.classList.add("is-invalid")
            $("error-email").innerHTML = "El email ya esta registrado"
        } else {
            inputEmail.classList.remove("is-invalid")
            $("error-email").innerHTML = null
        }
    })

    inputPass.addEventListener("keyup",() =>{

        if (inputPass.value.trim() == "") {
            inputPass.classList.add("is-invalid")
            $("error-pass").innerHTML = "Debes ingresar una contraseña"
            eyePass.style.display = "none"

        } else if (inputPass.value.trim().length < 6){
            inputPass.classList.add("is-invalid")
            $("error-pass").innerHTML = "la contraseña tiene que tener al menos 6 caracteres"
            eyePass.style.display = "none"

        }else {
            inputPass.classList.remove("is-invalid")
            $("error-pass").innerHTML = null
            eyePass.style.display = "initial"
        }
    })

    inputPass2.addEventListener("keyup",() =>{

        if (inputPass2.value != inputPass.value) {
            inputPass2.classList.add("is-invalid")
            $("error-pass2").innerHTML = "las contraseñas no coinciden"
            eyePass2.style.display = "none"

        }else {
            inputPass2.classList.remove("is-invalid")
            $("error-pass2").innerHTML = null
            eyePass2.style.display = "initial"

        }
    })
    
    // detengo el envio el formulario

    form.addEventListener('submit', e => {
        let error = false;
        e.preventDefault()

        // input name
            if(inputName.value.trim() == ""){
                inputName.classList.add("is-invalid")
                $("error-name").innerHTML = "el nombre es obligatorio"

                error = true
            }else if(inputName.value.trim().length < 3){
                inputName.classList.add("is-invalid")
                $("error-name").innerHTML = "el nombre debe tener al menos 3 caracteres"
                
                error = true
            }

        // input email
            if (!regExEmail.test(inputEmail.value)) {
                inputEmail.classList.add("is-invalid")
                $("error-email").innerHTML = "Debes ingresar un email válido"
                
                error = true
            }else if(listEmails.includes(inputEmail.value.trim())){
                inputEmail.classList.add("is-invalid")
                $("error-email").innerHTML = "El email ya esta registrado"
                
                error = true
            }
        
        // input password
            if (inputPass.value.trim() == "") {
                inputPass.classList.add("is-invalid")
                $("error-pass").innerHTML = "Debes ingresar una contraseña"
                eyePass.style.display = "none"
                
                error = true
            } else if (inputPass.value.trim().length < 6){
                inputPass.classList.add("is-invalid")
                $("error-pass").innerHTML = "la contraseña tiene que tener al menos 6 caracteres"
                eyePass.style.display = "none"
                
                error = true
            }

        // input confirm password
            if (inputPass2.value != inputPass.value) {
                inputPass2.classList.add("is-invalid")
                $("error-pass2").innerHTML = "las contraseñas no coinciden"
                eyePass2.style.display = "none"
                
                error = true
            }


        if (!error) {
            form.submit()
        }
    }) 
})