import express from 'express';

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// app.post('/register', (req, res) => {});

app.get('/api/hello', (req, res) => {
  res.json({
    msg: 'Hello'
  });
});

app.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://${hostname}:${port}/`);
});
