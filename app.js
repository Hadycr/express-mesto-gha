const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// eslint-disable-next-line import/no-extraneous-dependencies
const { errors } = require('celebrate');
const router = require('./routes/index');
const defaultError = require('./errors/defaultError');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  enableUtf8Validation: false,
});

app.use(bodyParser.json());

app.use(router);

app.use(errors());
app.use(defaultError);

app.listen(PORT);
