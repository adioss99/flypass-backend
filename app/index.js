const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'ready to fly',
    message: 'go free',
  });
});

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
