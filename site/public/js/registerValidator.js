
const $ = id => document.getElementById(id);

let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

let errors = false;
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

    // VALIDACIONES
    inputName.addEventListener("keyup",() =>{

        if(inputName.value.trim() == ""){
            inputName.classList.add("is-invalid")
            $("error-name").innerHTML = "el nombre es obligatorio"
            errors = true;
        }else if(inputName.value.trim().length < 2){
            inputName.classList.add("is-invalid")
            $("error-name").innerHTML = "el nombre debe tener al menos 2 caracteres"
            errors = true;
        }else{
            inputName.classList.remove("is-invalid")
            $("error-name").innerHTML = null
            errors = false;
        }

    })

    inputEmail.addEventListener("keyup",() =>{

        if (!regExEmail.test(inputEmail.value)) {
            inputEmail.classList.add("is-invalid")
            $("error-email").innerHTML = "Debes ingresar un email válido"
            errors = true;
        }else if(listEmails.includes(inputEmail.value.trim())){
            inputEmail.classList.add("is-invalid")
            $("error-email").innerHTML = "El email ya esta registrado"
            errors = true;
        } else {
            inputEmail.classList.remove("is-invalid")
            $("error-email").innerHTML = null
            errors = false;
        }
    })

    inputPass.addEventListener("keyup",() =>{

        if (inputPass.value.trim() == "") {
            inputPass.classList.add("is-invalid")
            $("error-pass").innerHTML = "Debes ingresar una contraseña"
            errors = true;

        } else if (inputPass.value.trim().length < 6){
            inputPass.classList.add("is-invalid")
            $("error-pass").innerHTML = "la contraseña tiene que tener al menos 6 caracteres"
            errors = true;

        }else {
            inputPass.classList.remove("is-invalid")
            $("error-pass").innerHTML = null
            errors = false;
        }
    })

    inputPass2.addEventListener("keyup",() =>{

        if (inputPass2.value != inputPass.value) {
            inputPass2.classList.add("is-invalid")
            $("error-pass2").innerHTML = "las contraseñas no coinciden"
            errors = true;
        }else {
            inputPass2.classList.remove("is-invalid")
            $("error-pass2").innerHTML = null
            errors = false;
        }
    })
    
    console.log(errors);
    form.addEventListener("submit",(e) =>{
        e.preventDefault()
    })
})