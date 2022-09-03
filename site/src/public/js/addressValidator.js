
 window.addEventListener('load', ()=> {

    //Form
    const form = $('formAddress')

    //Inputs
    const street = $('street')
    const number = $('number')
    const postalCode = $('postalCode')

    const neighborhood = $('neighborhood')


    //Validaciones

    street.addEventListener('keyup', ()=> {
        if(street.value.trim() == ''){
            street.classList.add('is-invalid')
            $('errorStreet').innerHTML = 'Ingresar calle'
        }else if(Number.isInteger(parseInt(street.value))){
            street.classList.add('is-invalid')
            $('errorStreet').innerHTML = 'Ingresar solo letras'
        }else{
            street.classList.remove('is-invalid')
            $('errorStreet').innerHTML = null
        }
    })

    number.addEventListener('keyup',()=> {
        if(number.value.trim()==''){
            number.classList.add('is-invalid')
            $('errorNumber').innerHTML = 'Ingresar altura'
        }else if(!Number.isInteger(parseInt(number.value))){
            number.classList.add('is-invalid')
            $('errorNumber').innerHTML = 'Ingresar solo numeros'
        }else{
            number.classList.remove('is-invalid')
            $('errorNumber').innerHTML  =null 
        }
    })

    postalCode.addEventListener('keyup',()=> {
        if(postalCode.value.trim()==''){
            postalCode.classList.add('is-invalid')
            $('errorPostalCode').innerHTML = 'Ingresar codigo'
        }else if(!Number.isInteger(parseInt(postalCode.value))){
            postalCode.classList.add('is-invalid')
            $('errorPostalCode').innerHTML = 'Ingresar solo numeros'
        }else{
            postalCode.classList.remove('is-invalid')
            $('errorPostalCode').innerHTML  =null 
        }
    })
    
    neighborhood.addEventListener('keyup', ()=> {
        if(neighborhood.value.trim() == ''){
            neighborhood.classList.add('is-invalid')
            $('errorNeighborhood').innerHTML = 'Ingresar localidad'
        }else if(Number.isInteger(parseInt(neighborhood.value))){
            neighborhood.classList.add('is-invalid')
            $('errorNeighborhood').innerHTML = 'Ingresar solo letras'
        }else{
            neighborhood.classList.remove('is-invalid')
            $('errorNeighborhood').innerHTML = null
        }
    })


    //Detengo envìo de formulario
    form.addEventListener('submit', e => {
        let error = false;
        e.preventDefault()

        // input street
            if(street.value.trim() == ''){
                street.classList.add('is-invalid')
                $('errorStreet').innerHTML = 'Ingresar calle'

                error = true;
            }else if(Number.isInteger(parseInt(street.value))){
                street.classList.add('is-invalid')
                $('errorStreet').innerHTML = 'Ingresar solo letras'

                error = true;
            }

        //  input number
            if(number.value.trim()==''){
                number.classList.add('is-invalid')
                $('errorNumber').innerHTML = 'Ingresar altura'

                error = true;
            }else if(!Number.isInteger(parseInt(number.value))){
                number.classList.add('is-invalid')
                $('errorNumber').innerHTML = 'Ingresar solo numeros'

                error = true;
            }

        // input postalCode
            if(postalCode.value.trim()==''){
                postalCode.classList.add('is-invalid')
                $('errorPostalCode').innerHTML = 'Ingresar codigo'

                error = true;
            }else if(!Number.isInteger(parseInt(postalCode.value))){
                postalCode.classList.add('is-invalid')
                $('errorPostalCode').innerHTML = 'Ingresar solo numeros'

                error = true;
            }

        // input neighborhood 
            if(neighborhood.value.trim() == ''){
                neighborhood.classList.add('is-invalid')
                $('errorNeighborhood').innerHTML = 'Ingresar localidad'

                error = true;
            }else if(Number.isInteger(parseInt(neighborhood.value))){
                neighborhood.classList.add('is-invalid')
                $('errorNeighborhood').innerHTML = 'Ingresar solo letras'

                error = true;
            }

        if (!error) {
            form.submit()
        }
    }) 

 })