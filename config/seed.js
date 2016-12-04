"use strict";
let faker = require('faker')
let User = require('../models').User
let Game = require('../models').Game
let Games = ['Overwatch', 'Starcraft','League of Legends']
let Details = require('../models').GamerDetail
let game_modes = ['quick_play', 'competitive', 'bots']
let game_ranks  = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond']
let game_attitude = ['competitive', 'casual']
module.exports = 
    function(seed_amt){

        for(let j in Games){
            Game.sync().then(
                () => {
                    Game.build({
                        game_name: Games[j]
                    })
                    .save()
                    .catch(
                        (error) => {
                            console.log(error)
                        }
                    )
                }
            )
        }
        for(let i = 0; i < seed_amt; i++){
            let game_index = Math.floor(Math.random() * 3)
            let mode_index = Math.floor(Math.random() * 3)
            let rank_index = Math.floor(Math.random() * 5)
            let att_index = Math.floor(Math.random() * 2)
            User.sync().then(
                () => {
                    User.build({
                        first_name: faker.name.firstName(),
                        last_name:  faker.name.lastName(),
                        username:   faker.internet.userName(),
                        email:      faker.internet.email(),
                        password:   "123"
                     })
                     .save()
                     .then((user) => {
                           Game.find({where: {game_name: Games[game_index]}}).then(function(game) {

                                user.addGame(game, 
                                {   summary: faker.lorem.sentence(),
                                    rank: game_ranks[rank_index],   
                                    attitude: game_attitude[att_index],
                                    mode_name: [game_modes[mode_index]],
                                    want_improve: true    
                                })
                                .catch(function() {
                                // render failed page
                                }); 
                            })
                            Game.find({where: {game_name: "Overwatch"}}).then(function(game) {

                                user.addGame(game, 
                                {   summary: faker.lorem.sentence(),
                                    rank: game_ranks[rank_index],   
                                    attitude: game_attitude[att_index],
                                    mode_name: [game_modes[mode_index]],
                                    want_improve: true    
                                })
                                .catch(function() {
                                // render failed page
                                }); 
                            })
                     })
                     .catch(
                        (error) => {
                            console.log(error)
                        })
                }
            )
        }
    }
