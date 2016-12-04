'use strict'
// const models = require('../models/')
const express   = require('express')
const router    = express.Router()
const models    = require('../models')
const passport  = require('passport')
const Redirect  = require('../middlewares/redirect')

// Middle-link that redirects the user to their profile page (if logged in)
router.get('/profile', Redirect.ifNotLoggedIn('/login'), (req, res) => {
  let link = '/profile/' + req.user.dataValues.id.toString()
  res.redirect(link)
})

// Displays their profile page with all their games
router.get('/profile/:id', Redirect.ifNotLoggedIn('/login'), (req, res) => {
  models.User.findById(req.params.id).then((user) => {
    if (user === null) {
      let error = "Profile does not exist"
      res.redirect('/404', {error: error, user_info: req.user})
    }

    models.GamerDetail.findAllGames(req.params.id).then((games) => {
      res.render('profile', {user: user, games: games, user_info: req.user})
    })
  })
})

router.post('/profile/:id', Redirect.ifNotLoggedIn('/login'), function(req, res){

})


module.exports = router;
