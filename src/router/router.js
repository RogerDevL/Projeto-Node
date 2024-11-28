const {Router} = require('express');
const clientesRotas = require('./clientesRotas');
const router = Router();

router.use('/clientes', clientesRotas);




module.exports = router;