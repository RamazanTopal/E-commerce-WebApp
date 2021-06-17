const express=require('express');
const pageController=require('../controllers/pageController')
const router=express.Router();

router.route('/').get(pageController.getIndex);
router.route('/about').get(pageController.getAbout);
router.route('/cart').get(pageController.getCart);
router.route('/contact').get(pageController.getContact);
router.route('/gallery').get(pageController.getGallery);
router.route('/myaccount').get(pageController.getMyAccount);
router.route('/shopdetails').get(pageController.getShopDetails);
router.route('/shop').get(pageController.getShop);
router.route('/wishlist').get(pageController.getWishlist);
module.exports=router;