import { createServer } from 'node:net';
import { stdout } from 'node:process';

const server = createServer((socket) => {
  socket.pipe(stdout);
  // Testez dans Chrome en allant à l'URL http://localhost:8081
  // GET / HTTP/1.1
  // Host: localhost:8081
  // Connection: keep-alive
  // sec-ch-ua: "Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"
  // sec-ch-ua-mobile: ?0
  // sec-ch-ua-platform: "macOS"
  // Upgrade-Insecure-Requests: 1
  // User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36
  // Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
  // Sec-Fetch-Site: none
  // Sec-Fetch-Mode: navigate
  // Sec-Fetch-User: ?1
  // Sec-Fetch-Dest: document
  // Accept-Encoding: gzip, deflate, br
  // Accept-Language: fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7
});

server.on('error', (err) => {
  console.log(err);
});

// server.on('listening', () => {
//   console.log('Server started on port 8081');
// })

server.listen(8081, () => {
  console.log('Server started on port 8081');
});
