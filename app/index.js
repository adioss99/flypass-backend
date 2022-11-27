const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/router');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
