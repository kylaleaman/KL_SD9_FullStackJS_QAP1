// In Node.js, the http module helps you build servers and send requests on the web. 
// It provides functionality to handle HTTP methods, headers, and other aspects of 
// web communication."

// Import the http module
const http = require('http');

// Create a simple HTTP server
const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello Peter!');
  response.end()
});

server.listen(3000, () => {
  console.log('Hello Peter!');
});
