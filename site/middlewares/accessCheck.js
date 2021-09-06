module.exports = (req,res,next) =>{
    if(req.session.userLogged && req.session.userLogged.access == "admin"){
        next()
    }
    res.redirect("/");
}