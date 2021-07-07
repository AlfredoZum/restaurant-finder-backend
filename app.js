const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const connection = require('./src/connection/connection2');

require('./src/connection/connection'); // importa el archivo de conexión
const User = require('./src/models/userModel');

const init = async () => {
  const user = new User({ name: 'eldevsin.site' }); // crea la entidad
  user.save();
  /* const db = await connection(); // obtenemos la conexión

  await db.collection('user').insertOne({ // insertamos un usuario
    name: 'devsin.site',
  }); */
};

init();

module.exports = app;
