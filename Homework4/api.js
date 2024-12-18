const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3000;
const USERS_FILE = path.join(__dirname, 'users.json');
function readUsers() {
  try {
    
      const data = fs.readFileSync(USERS_FILE, 'utf8');
      return JSON.parse(data);
    
  } catch (err) {
    console.error(err);
    return [];
  }
}

function writeUsers(users) {
  try {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  } catch (err) {
    console.error(err);
  }
}

const server = http.createServer((req, res) => {
  const { method, url } = req;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the User API. Use /users endpoin');
  if (url === '/users') {
    if (method === 'GET') {
      const users = readUsers();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(users));
    } else if (method === 'POST') {
      let body = '';
      req.on('data', chunk => {
        body += chunk;
      });

      req.on('end', () => {
        try {
          const user = JSON.parse(body);
          if (!user.name || !user.age) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error:"error" }));
            return;
          }

          const users = readUsers();
          users.push(user);
          writeUsers(users);

          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'User added', user }));
        } catch (err) {
          console.error('Error parsing request body:', err);
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Invalid JSON' }));
        }
      });
    } else {
      res.writeHead(405, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Method not allowed' }));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
