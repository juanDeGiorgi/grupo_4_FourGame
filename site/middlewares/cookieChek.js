module.exports= (req,res,next)=> {
    if( req.cookies.rememberSession){
        req.session.logueado = req.cookies.rememberSession
    }
    next()
}