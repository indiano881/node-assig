const http = require("http");
const url = require("url");
const fs = require("fs");

http.createServer((req,res) => {
//queries-do we need this part????
const adress_query= "http://fea23ght-club.se/english?rule=1";
const fullAdress= url.parse(adress_query,true);
//end of queries


    
    if (req.url.includes("/english")) {
        res.writeHead(200, "fea23gth club works",{"Content-Type":"text/plain"})
        let queries= url.parse(req.url, true).query;
        if (queries.rule==="1") {
            res.write("Rule n.1");
            res.end();
        } else if (queries.rule=="2") {
            res.write("Rule n.2");
            res.end();
        }  else if (queries.rule=="3") {
            res.write("Rule n.3");
            res.end();
        }  else if (queries.rule=="4") {
            res.write("Rule n.4");
            res.end();
        } else if (queries.rule=="5") {
            res.write("Rule n.5");
            res.end();
        }  else if (queries.rule=="6") {
            res.write("Rule n.6");
            res.end();
        }  else if (queries.rule=="7") {
            res.write("Rule n.7");
            res.end();
        } else if (queries.rule=="8") {
            res.write("Rule n.8");
            res.end();
        } 
        console.log(queries.rule);

        fs.readFile("rules_en.txt", (err,data)=>{
            if (err) throw err;
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
Create a home page DONE
Create content for at least 4 routes DONE
At least two routes must render html DONE
At least two routes must display content that comes from an external file (eg txt or html) DONE
To achieve a Välgodkänt grade you must do the above and:
Read queries passed in the url
Generate different content based on the queries
The content should be stored in external files DONE


*/