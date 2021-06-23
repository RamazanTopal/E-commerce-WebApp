const User=require('../models/User');
const Product=require('../models/Product');
const Category=require('../models/Category');

exports.getDashboard=async (req,res)=>{
    res.render("dashboard",{user:await User.findOne({_id:req.session.userID})});
}

exports.getAddProduct=async (req,res)=>{
    const categories=await Category.find();
    res.render("admin/add_product",
    {
        categories:categories
    });
}

exports.postAddProduct=async (req,res)=>{
    await Product.create(req.body)
    res.redirect('/admin/add_product');
}


exports.getAddCategory=async (req,res)=>{
    res.render("admin/add_category");
}

exports.postAddCategory=async (req,res)=>{
    await Category.create(req.body)
    res.redirect('/admin/add_category');
}

//shop page
exports.getAdminShop=async (req,res)=>{
    const product=await Product.find()
    const category=await Category.find()
    res.render("shop",{
        product:product,
        category:category
    });
}
exports.getAdminShopEditProduct=async (req,res)=>{
    res.render("shop",{product:await Product.find()});
}
exports.getAdminShopEditCategory=async (req,res)=>{
    res.render("shop",{product:await Product.find()});
}

//shop page finish



//product
exports.getProductDetail=async (req,res)=>{
    const product=await Product.findById(req.params.id);
    res.render("admin/detail_product",{product:product});
}
exports.deleteProduct=async (req,res)=>{
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/admin/shop')
}

exports.updateProduct=async (req,res)=>{
    const product=await Product.findById(req.params.id);
    product.name=req.body.name;
    product.price=req.body.price;
    product.image=req.body.image;
    await product.save();
    res.redirect("/admin/shop");
}
exports.getupdateProduct=async (req,res)=>{
    const product=await Product.findById(req.params.id);
    res.render("admin/edit_product",{
        product:product
    });
}
//category
exports.deleteCategory=async (req,res)=>{
    await Category.findByIdAndDelete(req.params.id);
    res.redirect('/admin/shop')
}
exports.getupdateCategory=async (req,res)=>{
    const category=await Category.findById(req.params.id);
    res.render("admin/edit_category",{
        category:category
    });
}
exports.updateCategory=async (req,res)=>{
    const category=await Category.findById(req.params.id);
    category.name=req.body.name;;
    await category.save();
    res.redirect("/admin/shop");
}
//dashboard edit
exports.getAllProduct=async (req,res)=>{
    const products=await Product.find().populate('category');
    res.render("admin/edit_allproduct",
    {
        products:products
    });
}

exports.getAllCategory=async (req,res)=>{
    const categories=await Category.find();
    res.render("admin/edit_allcategory",
    {
        categories:categories
    });
}