const User=require('../models/User');
const Product=require('../models/Product');
const Category=require('../models/Category');
exports.getIndex=(req,res)=>{
    res.render("index");
}
exports.getAbout=(req,res)=>{
    res.render("about");
}
exports.getCart=(req,res)=>{
    res.render("cart");
}
exports.getContact=(req,res)=>{
    res.render("contact");
}
exports.getGallery=(req,res)=>{
    res.render("gallery");
}
exports.getMyAccount=(req,res)=>{
    res.render("my-account");
}
exports.getShopDetails=(req,res)=>{
    res.render("shop-detail");
}
exports.getShop=(req,res)=>{
    res.render("shop");
}
exports.getWishlist=(req,res)=>{
    res.render("wishlist");
}