module.exports = (req,res,next) =>{
    if(req.session.userLogged && req.session.userLogged.access == 2){
        next()
    }else{
        return res.redirect("/");
    }
    console.log(req.session.userLogged);
}