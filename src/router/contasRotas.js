const {Router} = require('express');
const contaController = require('../controller/contaController');
const { validateConta, validateContaId } = require('../middlewares/validateContas');

const router = Router();


router.post('/', validateConta, contaController.create);

router.put('/:id', validateConta, validateContaId, contaController.update);

router.get('/:id', validateContaId, contaController.getOne);

router.delete('/:id', validateContaId, contaController.delete);
 
router.get('/', contaController.getAll);


module.exports = router;