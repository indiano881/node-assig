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
        res.writeHead(200, "fea23gth club works",{"Content-Type":"text/plain"})
        fs.readFile("rules_it.txt", (err,data)=>{
            if (err) throw err;
            res.write(data);
            res.end();
        })
        
    } else if (req.url==="/about_us") {
        res.writeHead(200,"fea23gth club works",{"Content-Type":"text/html"})
        fs.readFile("about_us.html", (err,data)=>{
            if (err) throw err;
            res.write(data);
            res.end();
        })

    } else {
        res.writeHead(200,"fea23gth club works",{"Content-Type":"text/html"})
        fs.readFile("index.html", (err,data)=>{
            if (err) throw err;
            res.write(data);
            res.end();
        })
    }


    

}).listen(3030,()=>console.log("server started"))

//?language=english&rule=1;
//OR /english?rule=1
/*
To achieve a Godkänt grade you must:

Create a webserver
Create a home page
Create content for at least 4 routes
At least two routes must render html
At least two routes must display content that comes from an external file (eg txt or html)
To achieve a Välgodkänt grade you must do the above and:
Read queries passed in the url
Generate different content based on the queries
The content should be stored in external files

The actual content, routes and queries are entirety up to you. For ease of assessment, 
I strongly recommend adding instructions on how 
to access your routes and queries to the home page. I need to know where I'm supposed to go!
*/