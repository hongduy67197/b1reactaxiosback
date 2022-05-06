const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')

// user
router.get('/user/:iduser', userController.getUser);
router.get('/user/alluser', userController.getListUser);
router.post('/user/register', userController.register);
router.post('/user/login', userController.login);
router.put('/user/:iduser', userController.editUser)

// product
router.get('/product', userController.getListProduct)
router.get('/product/:idProduct', userController.getProductId)
router.get('/productName', userController.searchProduct)
router.post('/productncode', userController.createProductAndProductCode)
router.post('/product', userController.createProduct)
router.put('/product/:idProduct', userController.updateProduct)
router.delete('/product/:idProduct', userController.deleteProduct)

// productCode 
router.get('/productCode', userController.getListProductCode)
router.post('/productCode', userController.createProductCode)
router.put('/productCode/:idproductCode', userController.updateProductCode)
router.delete('/productCode/:idProductCode', userController.deleteProductCode)

// catagories
router.get('/catagories', userController.getListCatagories)
router.post('/catagories', userController.createCatagories)
router.put('/catagories/:idCatagories', userController.updateCatagories)
router.delete('/catagories/:idCatagories', userController.deleteCatagories)

// cart
router.get('/cart', userController.getListCart)
router.get('/cart/:idCart', userController.selectCart)
router.post('/cart', userController.createCart)
router.put('/cart/:idCart', userController.editCart)
router.delete('/cart/:idCart', userController.deleteCart)

module.exports = router