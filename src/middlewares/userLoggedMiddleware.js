const userLoggedMiddleware=function(req,res,next){    
    res.locals.isAdminLogged=false
    res.locals.isUserLogged=false
    if(req.session && req.session.adminLogged){
        res.locals.isAdminLogged=true
        res.locals.isUserLogged=true
        res.locals.adminLogged=req.session.adminLogged
    }else if(req.session && req.session.userLogged){
        res.locals.isUserLogged=true
        res.locals.userLogged=req.session.userLogged
    }
    next();
}

module.exports=userLoggedMiddleware;