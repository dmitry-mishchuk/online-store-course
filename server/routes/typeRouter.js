const Router = require('express');
const typeController = require('../controlers/typeControler');
const checkRole = require('../middleware/checkRole');
const router = new Router();

router.post('/', checkRole('ADMIN'), typeController.create);
router.get('/',typeController.getAll);

module.exports = router;
