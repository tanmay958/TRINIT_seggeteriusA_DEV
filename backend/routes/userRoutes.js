const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.post('/confirmEmail/:token', authController.confirmEmail);

//Checking the user if he is logged in before giving access to apis of his profile
router.use(authController.protect);

// router.patch("/updateMe", userController.updateMe);
// router.delete("/deleteMe", userController.deleteMe);

module.exports = router;
