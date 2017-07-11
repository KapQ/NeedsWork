//Dependencies
var express = require('express');
var router = express.Router();

//Models
var Stat = require('../models/product');

//Routes
Stat.methods(['get', 'put', 'post', 'delete']);
Stat.register(router, '/stat');

//Return router
module.exports = router;
