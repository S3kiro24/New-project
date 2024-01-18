const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');
const LocalStrategy = require('passport-local').Strategy;
const { Sequelize } = require('./config/sequelize');
const { User } = require('./models/user');
const exphbs = require('express-handlebars').create({});

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Sequelize and models
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: '127.0.0.1',
  username: 'Marcos',
  password: '123456789',
  database: 'baby_medical_track',
});

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
passport.use(new LocalStrategy(
  {
    usernameField: 'username',
    passwordField: 'password',
  },
  (username, password, done) => {
    User.findOne({ where: { username: username } })
      .then(user => {
        if (!user || !user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect username or password' });
        }
        return done(null, user);
      })
      .catch(err => done(err));
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then(user => done(null, user))
    .catch(err => done(err));
});

// Set up Handlebars as the view engine
app.engine('hbs', exphbs.engine);
app.set('view engine', 'hbs');

// Example route for rendering the login page
app.get('/login', (req, res) => {
  res.render('login');
});

// Example route for handling login form submission
app.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true,
}));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
