'use strict'
const User      = require('../models').User
const express   = require('express')
const router    = express.Router();

router.get('/users', (req, res) => {
    User.findAll()
        .then((users) => {
            res.render('users', {user: users, user_info: req.user})
        })
})


module.exports = router
