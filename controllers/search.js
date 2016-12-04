'use strict'
const express = require('express')
const router = express.Router()
const passport = require('passport')
const Redirect  = require('../middlewares/redirect')

router.get('/', function(req, res){
  console.log(req.user)
  res.render('search', {user_info: req.user});
})

router.post('/', Redirect.ifNotLoggedIn('/login'), function (req, res) {
  // post method for search queries
})



module.exports = router;
