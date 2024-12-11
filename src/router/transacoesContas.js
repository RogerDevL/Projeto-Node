const {Router} = require('express');
const transacaoController = require('../controller/transacaoController');
const { validateTransacao, validateTransacaoId } = require('../middlewares/validateTransacao');
const router = Router();



router.post('/', validateTransacao, transacaoController.create);

router.put('/:id', validateTransacao, validateTransacaoId, transacaoController.update);

router.get('/:id', validateTransacaoId, transacaoController.getOne);

router.delete('/:id', validateTransacaoId, transacaoController.delete);

router.get('/', transacaoController.getAll);

module.exports = router;


