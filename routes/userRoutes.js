const express=require('express');
const userController=require('../controllers/userController')
const router=express.Router();

router.route('/register').get(userController.getRegister);
router.route('/login').get(userController.getLogin);
router.route('/register').post(userController.postRegister);
router.route('/login').post(userController.postLogin);
router.route('/logout').get(userController.getLogout);
module.exports=router;