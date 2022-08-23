let http = require('http');
let server = http.createServer((req, res)=>{
    res.end('Hello Node Server')
})
server.listen(5000);
console.log(`Node Server is Running`);

