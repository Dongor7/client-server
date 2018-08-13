const userController = require('../controllers/user');
const Router = require('koa-router');
const router = new Router();

router.post('/', userController.add);
router.get('/', userController.getAll);

module.exports = router.routes();