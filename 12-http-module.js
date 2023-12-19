
const http = require('http');

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end('welcome to home page');
    }
    else if(req.url === '/about'){
        res.end('here is our short history');
    }
    else res.end('error page ');
})

server.listen(5000);