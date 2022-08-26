let fs = require("fs");
let http = require("http");

let server = http.createServer((req, res) => {
  //  rename FIle Sync method===================
  //===============================================
  if (req.url == "/") {
   let result = fs.renameSync("asyncDemo.txt", "asyncDemoNew.txt")
      if (result) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("File Write Fail");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("File Write Success");
        res.end();
      }
  }
});
server.listen(5050);
console.log(`Node Server is Running`);
