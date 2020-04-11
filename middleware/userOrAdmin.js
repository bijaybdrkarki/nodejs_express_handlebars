const userOrAdmin = (req,res) => {
    
    if (req.session.userInfo.type == "admin")
    {
        res.redirect("/admin")
    }
    else
    {
        res.redirect("/");
    }

}

module.exports = userOrAdmin;