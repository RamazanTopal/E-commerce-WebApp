const express=require('express');
const adminController=require('../controllers/adminController')
const router=express.Router();

router.route('/dashboard').get(adminController.getDashboard);

router.route('/add_product').get(adminController.getAddProduct);
router.route('/add_product').post(adminController.postAddProduct);

router.route('/add_category').get(adminController.getAddCategory);
router.route('/add_category').post(adminController.postAddCategory);

//shop page
router.route('/shop').get(adminController.getAdminShop);
router.route('/edit_product').get(adminController.getAdminShopEditProduct);
router.route('/edit_category').get(adminController.getAdminShopEditCategory);



router.route('/product_detail/:id').get(adminController.getProductDetail);
router.route('/product_delete/:id').delete(adminController.deleteProduct);
router.route('/product_update/:id').get(adminController.getupdateProduct);
router.route('/product_update/:id').put(adminController.updateProduct);


router.route('/category_update/:id').get(adminController.getupdateCategory);
router.route('/category_update/:id').put(adminController.updateCategory);
router.route('/category_delete/:id').delete(adminController.deleteCategory);
//dashboard edit
router.route('/edit_allproduct').get(adminController.getAllProduct);
router.route('/edit_allcategory').get(adminController.getAllCategory);

module.exports=router;