const router = require('express').Router();
const controller = require('../controllers/user.controller');

router.get('/list', controller.getUserList);
router.post('/', controller.createUser);
router.patch('/', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;