let fs = require("fs");
let http = require("http");

let server = http.createServer((req, res) => {
  //  Write FIle Sync method===================
  //===============================================
  if (req.url == "/") {
  let error =  fs.writeFileSync("syncDemo.txt", "Hello World write file in Sync way");
  {
    if (error) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File Write Fail");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File Write Success");
      res.end();
    }
  }

  }
});
server.listen(5050);
console.log(`Node Server is Running`);
