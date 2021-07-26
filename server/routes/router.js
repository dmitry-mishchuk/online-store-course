const Router = require('express')

const router = new Router()
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const brendRouter = require('./brendRouter')
const typeRouter = require('./typeRouter')

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/brend', brendRouter)
router.use('/type', typeRouter)

module.exports = router
