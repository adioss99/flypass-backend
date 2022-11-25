/* eslint-disable import/no-unresolved */
const express = require('express');

const morgan = require('morgan');

const app = express();
const PORT = 3000;
const router = require('./routes/router');

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'ready to fly',
    message: 'go free',
  });
});

/** Install request logger */
app.use(morgan('dev'));

/** Install JSON request parser */
app.use(express.json());

/** Install Router */
app.use(router);

module.exports = app;

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
