const express =  require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

router.get('/', userController.getAll);
router.get('/:id', userController.getOne);
router.post('/', userController.createUser);
router.delete('/', userController.delete);

module.exports = router;