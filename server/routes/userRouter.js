const Router = require('express')

const router = new Router()
const userController = require('../controlers/userControler');
const auth = require('../middleware/auth');

router.post('/registration', userController.registation)
router.post('/login', userController.login)
router.get('/auth', auth, userController.check)
router.get('/getAllUser', userController.getAllUser)

module.exports = router
