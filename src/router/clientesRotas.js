const { Router } = require('express');
const clienteController = require('../controller/clienteController');
const router = Router();

router.post('/', clienteController.create);

router.put('/:id', clienteController.update);

router.delete('/:id', clienteController.delete);

router.get('/:id', clienteController.getOne);

router.get('/', clienteController.getAll);

module.exports = router;