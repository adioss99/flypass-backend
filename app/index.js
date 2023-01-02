const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');

require('dotenv').config();

const routes = require('./routes/router');

const { PORT = 3000 } = process.env;
const app = express();
const server = createServer(app);

const io = new Server(server, {
  // transports: ['polling'],
  cors: {
    origin: '*',
  },
});

const users = [];
io.on('connection', (socket) => {
  socket.on('connected', (userId) => {
    users[userId] = socket.id;
  });
  socket.on('connected', (room) => {
    socket.join(room);
  });
});

global.io = io;

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
  }),
);

app.set('views', `${__dirname}/middleware/mailer-templates/`)
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);
server.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
