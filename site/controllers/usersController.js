const path= require('path');


module.exports={
    login : (req,res)=> res.render('login'),

    register : (req,res)=> res.render('register'),
   
    processRegister : (req,res) => {
        let errors = validationResult(req);
        let {nombre,email,contrasenia,pais,genero,hobbies} = req.body;
        if(typeof hobbies === "string"){
            hobbies = hobbies.split()
        }
        if(errors.isEmpty()){
            let usuario = {
                id : usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
                nombre,
                email,
                contrasenia : bcrypt.hashSync(contrasenia,10),
                pais,
                genero,
                hobbies : typeof hobbies === 'undefined' ? [] : hobbies,
                rol : "user"
            }
            usuarios.push(usuario);
            guardar(usuarios);

            req.session.userLogin = {
                id : usuario.id,
                nombre : usuario.nombre,
                rol : usuario.rol
            }
            return res.redirect('/')
        }else{
            return res.render('register',{
                productos,
                paises,
                old : req.body,
                errores : errors.mapped()
            })
        }
    }
}