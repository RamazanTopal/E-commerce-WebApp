const User=require('../models/User');
const bcrypt=require('bcrypt')
exports.getRegister=(req,res)=>{
    res.render("register");
}
exports.postRegister=async (req,res)=>{
    await User.create(req.body);
    res.redirect('/login')
}
exports.getLogin=(req,res)=>{
    res.render("login");
}
exports.postLogin=async (req,res)=>{
    const {email,password}= req.body;
    await User.findOne({email},(err,user)=>{
        if(user){
            bcrypt.compare(password,user.password,(err,same)=>{
                if(same){
                    req.session.userID=user._id;
                    res.redirect("/");
                }else{
                    res.redirect("/login");
                }
            })
        }else{
            res.redirect("/login");
        }
    })
}

exports.getLogout=async (req,res)=>{
    await req.session.destroy(function(err) {
        res.redirect("/");
     })
}


