let fs = require("fs");
let http = require("http");

let server = http.createServer((req, res) => {
  //  Exists FIle in ASync method===================
  //===============================================
  if (req.url == "/") {
    fs.exists("syncDemo.txt", function (result) {
      if (result) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("File is Exist");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("File is not exist");
        res.end();
      }
    });
  }
});
server.listen(5050);
console.log(`Node Server is Running`);
