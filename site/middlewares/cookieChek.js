module.exports= (req,res,next)=> {
    if( req.cookies.recordarSesion){
        req.session.logueado = req.cookies.recordarSesion
    }
    next()
}