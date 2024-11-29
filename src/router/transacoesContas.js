const {Router} = require('express');
const transacaoController = require('../controller/transacaoController');
const router = Router();



router.post('/', transacaoController.create);

router.put('/:id', transacaoController.update);

router.get('/:id', transacaoController.getOne);

router.delete('/:id', transacaoController.delete);

router.get('/', transacaoController.getAll);

module.exports = router;


