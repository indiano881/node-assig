const http = require("http");
const url = require("url");
const fs = require("fs");

http.createServer((req,res) => {
    res.writeHead(200, "fea23gth club works", {"Content-type":"text/html"})



    res.end();

}).listen(3030,()=>console.log("server started"))