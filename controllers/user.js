'use strict'
const User      = require('../models').User
const express   = require('express')
const router    = express.Router();

router.get('/user/:id', (req, res) => {
    User.findById(req.params.id).then((user) =>{
        if(user === null){
            res.redirect('/users', {user_info: req.user})
        }
        res.render('user', {user: user, user_info: req.user})
    })

})


module.exports = router
