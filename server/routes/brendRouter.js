const Router = require('express');
const brendController = require('../controlers/brendControler');

const router = new Router();

router.post('/', brendController.create);
router.get('/', brendController.getAll);

module.exports = router;
