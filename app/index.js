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
  cors: {
    origin: '*',
  },
});
io.on('connection', (socket) => {
  io.to(1).emit('pesan-baru', 'halo')
  // socket.emit('pesan-baru', 'halo')
  socket.on('kirim-pesan', (pesan) => {
    socket.broadcast.emit('pesan-baru', pesan);
  });
});
global.io = io;

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
  }),
);

app.set('views', __dirname+'/middleware/mailer-templates/')
app.set('view engine','ejs');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

server.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
