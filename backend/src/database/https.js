import http from 'node: http';
const { findAvailablePort } = require('./free-port.js');

console.log(process.env)

const desiredPort = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log('request received');
    res.end('Hello, World!');
});

findAvailablePort(desiredPort).then(port => {
    server.listen(port, () => {
        console.log(`Server is listening on port http://localhost:${port}`);
    });
});