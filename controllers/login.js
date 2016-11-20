// const models = require('../models/');
const express   = require('express')
const router    = express.Router()
const passport  = require('../middlewares/authentication')
const User      = require('../models').User
const Redirect  = require('../middlewares/redirect')

router.get('/login', Redirect.ifLoggedIn('/profile'),function(req, res) {
  res.render('login');
})

router.post('/login', Redirect.ifLoggedIn('/profile'), function(req, res, next){
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  })(req, res, next)
})

module.exports = router;
