const User      = require('../models').User
const express   = require('express')
const router    = express.Router();

router.get('/user/:id', (req, res) => {
    User.findById(req.params.id).then((user) =>{
        if(user === null){
            res.redirect('/users')
        }
        res.render('user', {all: user})    
    })
    
})


module.exports = router 