let fs = require("fs");
let http = require("http");

let server = http.createServer((req, res) => {
  //  Delete FIle in Sync method===================
  //===============================================
  if (req.url == "/") {
    let error = fs.unlinkSync('test.txt');
      if (error) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("File Delete Fail");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("File Delete Success");
        res.end();
      }
  }
});
server.listen(5050);
console.log(`Node Server is Running`);
