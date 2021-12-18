const login=function(req,res,next){
    if(req.session.adminLogged==null){
        return res.redirect('/');
    }
    next();
}

module.exports=login;