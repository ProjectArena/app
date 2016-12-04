'use strict'
// const models = require('../models/');
const express = require('express')
const router = express.Router()

router.get('/logout', function(req, res) {
  // will remove the req.user property from Passport
  req.logOut()
  req.session.destroy()
  // redirect to the home page
  res.redirect('/')
})

module.exports = router;
