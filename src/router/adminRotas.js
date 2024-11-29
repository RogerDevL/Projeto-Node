const {Router} = require('express');
const adminController = require('../controller/adminController');
const router = Router();


router.post('/', adminController.create);

router.put('/:id', adminController.update);

router.get('/:id', adminController.getById);

router.delete('/:id', adminController.delete);

router.get('/', adminController.getAll);

module.exports = router;