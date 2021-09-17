module.exports = (req,res,next) =>{
    if(req.session.userLogged && req.session.userLogged.access == "2"){
        next()
    }
    res.redirect("/");
}