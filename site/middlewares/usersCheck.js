module.exports = (req,res,next) =>{
    if(req.session.userLogged){
        next()
    }
    res.redirect("/users/login");
}