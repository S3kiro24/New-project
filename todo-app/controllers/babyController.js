// controllers/babyController.js
const db = require('../models');

module.exports = {
  getAllBabies: function (req, res) {
    db.Baby.findAll().then(babies => {
      res.json(babies);
    }).catch(err => {
      res.status(500).json(err);
    });
  },

  createBaby: function (req, res) {
    db.Baby.create(req.body).then(baby => {
      res.json(baby);
    }).catch(err => {
      res.status(400).json(err);
    });
  },

  updateBaby: function (req, res) {
    db.Baby.update(req.body, {
      where: { id: req.params.id }
    }).then(() => {
      res.sendStatus(200);
    }).catch(err => {
      res.status(400).json(err);
    });
  },

  deleteBaby: function (req, res) {
    db.Baby.destroy({
      where: { id: req.params.id }
    }).then(() => {
      res.sendStatus(200);
    }).catch(err => {
      res.status(500).json(err);
    });
  },
};
