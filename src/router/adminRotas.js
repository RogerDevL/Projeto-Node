const {Router} = require('express');
const adminController = require('../controller/adminController');
const { validateAdmin, validateAdminId } = require('../middlewares/validateAdmin');
const router = Router();


router.post('/', validateAdmin, adminController.create);

router.put('/:id', validateAdminId, validateAdmin, adminController.update);

router.get('/:id', validateAdminId, adminController.getById);

router.delete('/:id', validateAdminId, adminController.delete);

router.get('/', adminController.getAll);

module.exports = router;