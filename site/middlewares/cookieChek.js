module.exports= (req,res,next)=> {
    if( req.cookies.rememberSession){
        req.session.userLogged = req.cookies.rememberSession
    }
    next()
}