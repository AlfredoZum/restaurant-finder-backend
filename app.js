const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./src/routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/v1', indexRouter);

/* const connection = require('./src/connection/connection');
const User = require('./src/models/userModel');

const init = async () => {
  await connection();
  const user = new User({ name: 'eldevsin.site' }); // crea la entidad
  user.save();
}; */

// init();

const connection = require('./src/connection/connection');

const init = async () => {
  await connection();
};

init();

module.exports = app;
