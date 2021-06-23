const express=require('express');
const customerController=require('../controllers/customerController')
const router=express.Router();

router.route('/shop').get(customerController.getShopPage);

router.route('/product_detail/:id').get(customerController.getProductDetail);



module.exports=router;