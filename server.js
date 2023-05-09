let http = require("http");
let biodata = require("./moduleBiodata");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-Type": "text/html" });
    res.write(`Nama : Rizki septi ardi`);
    res.end();
  })
  .listen(8000);
