const login=function(req,res,next){
    if(req.session.adminLogged!=null){
        return res.redirect('/');
    }else{
        if(req.session.userLogged!=null){
            return res.redirect('/'); 
        }
    }
    next();
}

module.exports=login;