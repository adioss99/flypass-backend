const bodyParser = require('body-parser');
const express = require('express');
// const multer = require('multer')
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

require('dotenv').config();

// const form = multer()
const routes = require('./routes/router');

const { PORT = 3000 } = process.env;
const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
// app.use(form.array())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
