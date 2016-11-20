const express   = require('express')
const router    = express.Router()
const models    = require('../models')
const passport  = require('passport')
const Redirect  = require('../middlewares/redirect')

router.get('/register', Redirect.ifLoggedIn('/profile'), function(req, res){
  res.render('register');
})

router.post('/register', Redirect.ifLoggedIn('/profile'), function(req, res, next){
   models.User.sync().then(function() {
     var user = models.User.build({
       firstName: req.body.firstName,
       lastName:  req.body.lastName,
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
