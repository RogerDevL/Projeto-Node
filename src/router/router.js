const {Router} = require('express');
const clientesRotas = require('./clientesRotas');
const contasRotas = require ('./contasRotas');
const transacoesRotas = require('./transacoesContas');
const notificacaoRotas = require('./notificaçõesRotas');
const adminRotas = require('./adminRotas');
const adminController = require('../controller/adminController');
const router = Router();

router.use('/clientes', clientesRotas);

router.use('/contas', contasRotas);

router.use('/transacoes', transacoesRotas);

router.use('/notificacoes', notificacaoRotas);

router.use('/admin', adminRotas);

router.use('/login', adminController.login);

module.exports = router;