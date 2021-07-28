const Router = require('express')

const router = new Router()
const userController = require('../controlers/userControler');

router.post('/registration', userController.registation)
router.post('/login', userController.login)
router.get('/auth', userController.check)
router.get('/getAllUser', userController.getAllUser)

module.exports = router
