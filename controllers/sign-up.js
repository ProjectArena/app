const express = require('express');
const models = require('../models');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.post('/', this.submit);

    return router;
  },
  index(req, res) {
    res.render('sign-up');
  },
  submit(req, res) {
    models.Gamer.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      gamesPlay: req.body.gamesPlay,
    }).then((gamer) => {
      req.login(gamer, () =>
        res.redirect('/profile')
      );
    }).catch(() => {
      res.render('sign-up');
    });
  },
};
