const User=require('../models/User');
const Product=require('../models/Product');
const Category=require('../models/Category');

exports.getShopPage=async (req,res)=>{
    const product=await Product.find()
    const category=await Category.find()
    res.render("shop",{
        product:product,
        category:category
    });
}

exports.getProductDetail=async (req,res)=>{
    const product=await Product.findById(req.params.id);
    res.render("admin/detail_product",{product:product});
}