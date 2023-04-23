const express = require('express');
const { userRegister } = require('../controllers/userControllers');

const router = express.Router();

router.route('/register').post(userRegister);

module.exports = router