const login=function(req,res,next){
    if(req.session.adminLogged!=undefined){
        return res.redirect('/');
    }else{
        if(req.session.userLogged!=undefined){
            return res.redirect('/'); 
        }
    }
    next();
}

module.exports=login;