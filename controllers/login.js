// const models = require('../models/');
const express = require('express');
const router = express.Router();

router.get('/login', function(req, res) {
  res.render('login');
})

router.post('/login', function(req, res){

})

module.exports = router;
