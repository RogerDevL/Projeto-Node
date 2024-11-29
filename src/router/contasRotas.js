const {Router} = require('express');
const contaController = require('../controller/contaController');

const router = Router();


router.post('/', contaController.create);

router.put('/:id', contaController.update);

router.get('/:id', contaController.getOne);

router.delete('/:id', contaController.delete);
 
router.get('/', contaController.getAll);


module.exports = router;