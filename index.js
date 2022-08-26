let fs = require("fs");
let http = require("http");

let server = http.createServer((req, res) => {
  //  Exists FIle in Sync method===================
  //===============================================
  if (req.url == "/") {
    let result = fs.existsSync('Demo.txt');
      if (result) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("File is Exist");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("File is not exist");
        res.end();
      }
  }
});
server.listen(5050);
console.log(`Node Server is Running`);
