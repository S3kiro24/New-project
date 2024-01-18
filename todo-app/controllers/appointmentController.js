// controllers/appointmentController.js
const db = require('../models');

module.exports = {
  getAllAppointments: function (req, res) {
    db.Appointment.findAll().then(appointments => {
      res.json(appointments);
    }).catch(err => {
      res.status(500).json(err);
    });
  },

  createAppointment: function (req, res) {
    db.Appointment.create(req.body).then(appointment => {
      res.json(appointment);
    }).catch(err => {
      res.status(400).json(err);
    });
  },

  updateAppointment: function (req, res) {
    db.Appointment.update(req.body, {
      where: { id: req.params.id }
    }).then(() => {
      res.sendStatus(200);
    }).catch(err => {
      res.status(400).json(err);
    });
  },

  deleteAppointment: function (req, res) {
    db.Appointment.destroy({
      where: { id: req.params.id }
    }).then(() => {
      res.sendStatus(200);
    }).catch(err => {
      res.status(500).json(err);
    });
  },
};
