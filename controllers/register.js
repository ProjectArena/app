'use strict'
const express   = require('express')
const router    = express.Router()
const models    = require('../models')
const passport  = require('passport')
const Redirect  = require('../middlewares/redirect')

router.get('/register', Redirect.ifLoggedIn('/profile'), function(req, res){
  res.render('register', {user_info: req.user});
})

router.post('/register', Redirect.ifLoggedIn('/profile'), function(req, res, next){
  models.User.sync().then(function() {
    var user = models.User.build({
     first_name: req.body.first_name,
     last_name:  req.body.last_name,
     username:  req.body.username,
     email:     req.body.email,
     password:  req.body.password
    })
    
    user.save().then(function() {
      passport.authenticate('local', {
        successRedirect: '/profile',
      })(req, res, next)
    }).catch(function(error) {
      console.log(error)
    })
  })
})


module.exports = router;
