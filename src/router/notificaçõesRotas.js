const {Router} = require('express');
const notificacoesController = require('../controller/notificacoesController');
const router = Router();


router.post('/', notificacoesController.create);

router.put('/:id', notificacoesController.update);

router.get('/:id', notificacoesController.getOne);

router.delete('/:id', notificacoesController.delete);

router.get('/', notificacoesController.getAll);

module.exports = router;