// controllers/doctorController.js
const db = require('../models');

module.exports = {
  getAllDoctors: function (req, res) {
    db.Doctor.findAll().then(doctors => {
      res.json(doctors);
    }).catch(err => {
      res.status(500).json(err);
    });
  },

  createDoctor: function (req, res) {
    db.Doctor.create(req.body).then(doctor => {
      res.json(doctor);
    }).catch(err => {
      res.status(400).json(err);
    });
  },

  updateDoctor: function (req, res) {
    db.Doctor.update(req.body, {
      where: { id: req.params.id }
    }).then(() => {
      res.sendStatus(200);
    }).catch(err => {
      res.status(400).json(err);
    });
  },

  deleteDoctor: function (req, res) {
    db.Doctor.destroy({
      where: { id: req.params.id }
    }).then(() => {
      res.sendStatus(200);
    }).catch(err => {
      res.status(500).json(err);
    });
  },
};
