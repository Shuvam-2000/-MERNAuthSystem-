const { signUp, login } = require('../controllers/AuthController');
const { signupValidation, loginValidation } = require('../middlewares/AuthValidation');

const router = require('express').Router();

// login route
router.post('/login', loginValidation, login);

// signup route
router.post('/signup', signupValidation, signUp);

module.exports = router;