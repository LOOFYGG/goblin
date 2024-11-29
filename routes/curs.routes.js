const Router = require('express');
const router = Router();
const cursController = require('../controllers/curs.controller.js')

router.post('/api/curs', cursController.createCurse);
router.get('/api/curs', cursController.getCurses);
router.get('/api/curs/:id', cursController.getCurse);
router.delete('/api/curs/:id', cursController.deleteCurse);
router.put('/api/curs', cursController.updateCurse);

module.exports = router;