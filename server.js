const http = require("http");
const url = require("url");
const fs = require("fs");

http.createServer((req,res) => {
    
    if (req.url==="/english") {
        res.writeHead(200, "fea23gth club works",{"Content-Type":"text/plain"})
        fs.readFile("rules_en.txt", (err,data)=>{
            
            res.write(data);
            res.end();
        }
            
        )
        
    } else if (req.url==="/italian") {
        fs.readFile("rules_it.txt", (err,data)=>{
            if (err) throw err;
            res.write(data);
            res.end();
        })
        
    } else {
        res.write("<h1> Welcome to the Fea23ght club</h1>")
        res.end();
    }


    

}).listen(3030,()=>console.log("server started"))