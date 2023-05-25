const http = require('http');
const mongoose = require('mongoose');

require('dotenv').config();
const app  = require('./app');

const server = http.createServer(app);

server.on('error', (err) => {
  console.log(err.message);
});

mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => {
  server.listen(process.env.PORT, () => {
    console.log('Server started on port ' + process.env.PORT);
  });
});
