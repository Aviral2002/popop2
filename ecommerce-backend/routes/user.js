const express = require('express')
const router = express.Router()
const data = require('../logger.json')
const PaymentSchema = require('../models/Payment')

const Product = require('../models/product')
const { writeInFile, readInFile } = require('../utils/logger')
const { scrapLink, scraperToList } = require('../utils/scrapper')

//middlewares
const {authCheck} = require('../middlewares/auth')
//controllers
const {userCart, getUserCart, emptyCart, saveAddress,
    applyCouponToUserCart, createOrder, createCashOrder, orders,
    addToWishlist, wishlist, removeFromWishlist} = require('../controllers/user')

    const { CreateGroup, getGroup, joinGroup } = require('../controllers/groupController')


router.post('/user/cart', authCheck, userCart);
router.get('/user/cart', authCheck, getUserCart);
router.delete('/user/cart', authCheck, emptyCart);
router.post('/user/address', authCheck, saveAddress);
router.post('/user/order', authCheck, createOrder) //stripe
router.post('/user/cash-order', authCheck, createCashOrder) //COD
router.get('/user/orders', authCheck, orders)

//coupon
router.post('/user/cart/coupon', authCheck, applyCouponToUserCart)

//wishlist
router.post('/user/wishlist',authCheck, addToWishlist)
router.get('/user/wishlist', authCheck, wishlist)
router.put('/user/wishlist/:productId', authCheck, removeFromWishlist)
const dataofproduct = ''

router.post('/user/wishlist/createpaymentrequest', async(req, res) => {
    const {price} = req.body;
    writeInFile(price)
    res.json({msg: 'success'})
})
router.get('/user/wishlist/createpaymentrequest', async(req, res) => {
    console.log(data)
    res.json({msg: data})
})
router.post('/user/wishlist/successcrypto', async(req, res) => {
    try {
        const {url, productId} = req.body;
        const data = {
            productId: productId,
            paymentStatus: true,
            paymentVerifier: url
        }
        const createNewPayment = await new PaymentSchema({ data }).save();
        res.json(createNewPayment);
        // res.json({msg: 'good'})
    } catch (error) {
        console.log(error.message)
    }
})
router.get('/user/order/ordersummary/', async(req, res) => {
    try {
        const { productId } = req.body;
        const getProductSummaryData = await PaymentSchema.findOne({ productId }).exec();
        res,json({ getProductSummaryData })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.post("/product/:productId/Group",authCheck, CreateGroup)
router.get("/product/:productId/Group",authCheck, getGroup)
router.put("/product/:productId/JoinGroup",authCheck, joinGroup)


module.exports = router;