import express from 'express';

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

app.use((req, res, next) => {
  console.log(req.method + ' ' + req.url);
  next();
});

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

app.post('/register', express.json(), (req, res) => {
  console.log(req.body);
  res.json({
    msg: 'User created',
  });
});

app.get('/api/hello/:name', (req, res) => {
  // console.log(req.query.q); // ce qui suit ?q= dans l'URL

  res.json({
    msg: 'Hello ' + req.params.name
  });
});



app.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://${hostname}:${port}/`);
});
