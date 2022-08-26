let fs = require("fs");
let http = require("http");

let server = http.createServer((req, res) => {
  // ASync Read FIle method
  //   if (req.url == "/") {
  //     fs.readFile("home.html", function (error, data) {
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.write(data);
  //       res.end();
  //     });
  //   }
  // Sync Read FIle method
  if (req.url == "/") {
    let myData = fs.readFileSync("home.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(myData);
    res.end();
  }
});
server.listen(5050);
console.log(`Node Server is Running`);
