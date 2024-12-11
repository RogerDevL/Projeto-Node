const {Router} = require('express');
const notificacoesController = require('../controller/notificacoesController');
const { validateNotificacoes, validateNotificacoesId } = require('../middlewares/validateNotificacoes');
const router = Router();


router.post('/', validateNotificacoes, notificacoesController.create);

router.put('/:id', validateNotificacoes, validateNotificacoesId, notificacoesController.update);

router.get('/:id', validateNotificacoesId, notificacoesController.getOne);

router.delete('/:id', validateNotificacoesId, notificacoesController.delete);

router.get('/', notificacoesController.getAll);

module.exports = router;