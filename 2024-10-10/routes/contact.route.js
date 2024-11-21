const { Router } = require('express');
const router = Router();

const contactController = require('../controllers/contact.controller');
const contactMiddleware = require('../middlewares/contact.middleware');

router.get('/', contactController.getAll);
router.get('/sort', contactController.sortByQuery);
router.get('/:id', contactController.getOneById);
router.post('/create', contactController.create, contactController.createOne);
router.put('/update/:id', contactController.create, contactController.updateOneById);
router.delete('/delete/:id', contactController.deleteOneById);


module.exports = router;