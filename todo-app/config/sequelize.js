// config/sequelize.js
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Baby = require('../models/baby')(sequelize, Sequelize.DataTypes);
db.Doctor = require('../models/doctor')(sequelize, Sequelize.DataTypes);
db.Appointment = require('../models/appointment')(sequelize, Sequelize.DataTypes);
db.User = require('../models/user')(sequelize, Sequelize.DataTypes);

// Associations
db.Appointment.belongsTo(db.Baby);
db.Appointment.belongsTo(db.Doctor);

module.exports = db;
