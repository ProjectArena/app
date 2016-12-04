'use strict'
// const models = require('../models/')
const express   = require('express')
const router    = express.Router()
const passport  = require('passport')
const Redirect  = require('../middlewares/redirect')

router.get('/profile/:id', Redirect.ifNotLoggedIn('/login'), function(req, res) {
    User.findById(req.params.id).then(user) => {
        if (user === null)
            res.redirect('/404', {user_info: req.user})
    }
    res.render('profile/:id', {user_info: req.user})
})

router.post('/profile/:id', Redirect.ifNotLoggedIn('/login'), function(req, res){

})


module.exports = router;
