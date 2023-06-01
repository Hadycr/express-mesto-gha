const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// eslint-disable-next-line import/no-extraneous-dependencies
const helmet = require('helmet');
// eslint-disable-next-line import/no-extraneous-dependencies
const rateLimit = require('express-rate-limit');
const { errors } = require('celebrate');
const router = require('./routes/index');
const defaultError = require('./errors/defaultError');

const { PORT = 3000 } = process.env;
const app = express();
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  enableUtf8Validation: false,
});

app.use(bodyParser.json());

app.use(router);

app.use(errors());
app.use(defaultError);

app.listen(PORT);
