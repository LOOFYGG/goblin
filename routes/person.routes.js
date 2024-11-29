const Router = require('express');
const router = Router();
const personController = require('../controllers/person.controller.js')

router.post('/api/person', personController.createPerson);
router.get('/api/person', personController.getPersons);
router.get('/api/person/:id', personController.getPerson);
router.delete('/api/person/:id', personController.deletePerson);
router.put('/api/person', personController.updatePerson);

module.exports = router;