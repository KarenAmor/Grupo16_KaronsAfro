const login=function(req,res,next){
    if(req.session.adminLogged==undefined){
        return res.redirect('/');
    }
    next();
}

module.exports=login;