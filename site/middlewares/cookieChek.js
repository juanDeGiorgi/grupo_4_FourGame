module.exports= (req,res,next)=> {
    if( req.cookies.rememberSession){
        req.session.userLogged = req.cookies.rememberSession
    }
    if( req.cookies.rememberCartUser){
        req.session.order = req.cookies.rememberCartUser
    }
    next()
}