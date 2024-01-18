// controllers/authController.js
const db = require('../models');
const passport = require('passport');
const User = require('../models/user') 

module.exports = {
  signUp: function (req, res) {
    db.User.create({
      username: req.body.username,
      password: req.body.password,
    }).then(() => {
      res.redirect(307, '/auth/signin');
    }).catch(err => {
      res.status(401).json(err);
    });
  },

  signIn: passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
    failureFlash: true,
  }),

  signOut: function (req, res) {
    req.logout();
    res.redirect('/');
  },

  deleteAccount: function (req, res) {
    db.User.destroy({
      where: { id: req.user.id },
    }).then(() => {
      res.redirect('/');
    }).catch(err => {
      res.status(500).json(err);
    });
  },
};
