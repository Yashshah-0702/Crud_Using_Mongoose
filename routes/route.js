const express = require('express')
const router = express.Router()
const controll = require('../controller/controller')

router.get('/',controll.product)
router.get('/add-product',controll.addProduct)
router.post('/product',controll.postAddProduct)
router.get('/editproducts/:productId',controll.getEditProduct)
router.post('/edit-product',controll.postEditProduct)
router.post('/delete-product',controll.postDeleteProduct)

module.exports = router