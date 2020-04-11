const isAdmin = (req,res,next) => {
    
    if (req.session.userInfo.type == "admin")
    {
        next();
    }
    else
    {
        req.session.destroy();
        res.redirect("/login");
    }

}

module.exports = isAdmin;