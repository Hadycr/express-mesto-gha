const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/index');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  enableUtf8Validation: false,
});

app.use(bodyParser.json());
app.use((req, res, next) => {
  req.user = {
    _id: '6463c60328ee2b8f8ff3387f',
  };

  next();
});

app.use(router);
app.listen(PORT);
