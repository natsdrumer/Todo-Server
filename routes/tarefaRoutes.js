const express =  require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefaController');

router.get('/', tarefasController.getAll);
router.get('/:id', tarefasController.getOne);
router.post('/', tarefasController.createTarefa);
router.delete('/', tarefasController.delete);
//??router.get('/', tarefasController.search());

module.exports=router;