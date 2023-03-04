const express = require('express');
// const validateToken = require('../middleware/validTokenHandler')
const {registerUser,loginUser, currentUser} = require("../controllers/userController");
const validateToken = require('../middleware/validTokenHandler');
const router = express.Router();

// router.use(validateToken);
router.post('/register', registerUser)

router.post('/login',loginUser)

router.get('/current', validateToken,currentUser);

module.exports = router