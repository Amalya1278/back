const http = require('http');
const PORT = 3000;
const server = http.createServer((req, res) => {
  const {method ,url}= req;
    switch (method) {
      case 'GET':
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: "Welcome to the backend server" }));
        break;

     case 'POST':
      case 'PUT':
      case 'PATCH':
      case 'DELETE':
      case 'OPTIONS':
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: `Method is ${method} ` }));
        break;

      default:
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: `Method ${method} not allowed` }));
        break;
    }
  } 
);
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});