'use strict'
// const models = require('../models/');
const express = require('express');
const router = express.Router();
/*
router.get('/profile', function(req, res) {

  req.user.getGames({ through: {where: {rank: 'top'}}}).then(function(games) {
      // games is an array of games
  }).catch();

  res.render('profile');
})

router.post('/profile', function(req, res){

  models.Game.find({where: {game_name: 'cod'}}).then(function(game) {

    req.user.addGame(game, {rank: 'balh', attitude: 'bleh'}).then(function() {
      //render page
    }).catch(function() {
      // render failed page
    });

  }).catch(function() {

  });
})
*/
module.exports = router;
