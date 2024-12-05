const express = require('express');
const { CreateUser } = require('../controllers/user.controller');
const router= express.Router()
router.get('/create-user', upload.single('file', CreateUser))
 module.exports= router;