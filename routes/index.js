const express = require('express');

const router = express.Router();

const homeCont = require('../controllers/home_cont');

// console.log("router loaded");

router.get('/', homeCont.home);

router.use('/api/students', require('./student'));



module.exports = router;
