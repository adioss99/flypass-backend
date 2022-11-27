const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const routes = require('./routes/router');

const PORT = process.env.DB_PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
