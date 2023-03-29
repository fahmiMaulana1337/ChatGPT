
const express = require('express');
const router = express.Router()
const Controller = require('../controllers/controller');


router.post('/ai',Controller.ai)


module.exports=router;
