const userController = require('../controllers/user');
const Router = require('koa-router');
const router = new Router();

router.post('/user', userController.add);
router.get('/users', userController.getAll);

module.exports = router.routes();
