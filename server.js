const http = require('http');
const { handleRequest } = require('./src/routes');

const PORT = process.env.PORT || 3000;

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Available routes: GET /health, GET /users/:id, POST /sum');
});
