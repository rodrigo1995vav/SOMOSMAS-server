const express = require("express");
const router = express.Router();
const contactController = require('../controllers/contact-controller');
const { authenticateToken } = require('../services/auth-service');

router.get('/list',authenticateToken ,contactController.getAllContacts);

module.exports = router;
