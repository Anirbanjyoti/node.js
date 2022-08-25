let http = require('http');
let server = http.createServer((req, res)=>{
    if(req.url=="/"){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h1>This is Home</h1>')
        res.end();
    }
    else if(req.url=="/about"){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h1>This is about</h1>')
        res.end();
    }
    else if(req.url=="/contact"){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h1>This is contact</h1>')
        res.end();
    }
})
server.listen(5000);
console.log(`Node Server is Running`);

