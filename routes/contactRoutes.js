const express = require('express');
const validateToken = require('../middleware/validTokenHandler');
const router = express.Router();
const {getContacts ,createContact, getContact, updateContact, deleteContact} = require('../controllers/contactController');

  
router.use(validateToken);
router.route('/').get(getContacts).post(createContact)

router.route('/:id').get(getContact).put(updateContact).delete(deleteContact)


module.exports = router;