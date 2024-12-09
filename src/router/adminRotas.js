const {Router} = require('express');
const adminController = require('../controller/adminController');
const { validateAdmin, validateAdminId } = require('../middlewares/validateAdmin');
const router = Router();


router.post('/', validateAdmin, validateAdminId, adminController.create);

router.put('/:id', adminController.update);

router.get('/:id', adminController.getById);

router.delete('/:id', adminController.delete);

router.get('/', adminController.getAll);

module.exports = router;