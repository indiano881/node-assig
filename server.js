const http = require("http");
const url = require("url");
const fs = require("fs");

http.createServer((req,res) => {

    if (req.url.includes("/EN")) {
        res.writeHead(200, "fea23gth club works",{"Content-Type":"text/html"})
        let queries= url.parse(req.url, true).query;
        if (queries && queries.rule=="1") {

            fs.readFile("./single_rules_EN/1.html", (err,data)=> {
                if (err) throw err;
                res.write(data);
                res.end();
            })
            
        } else if (queries && queries.rule=="2") {
            fs.readFile("./single_rules_EN/2.html", (err,data)=> {
                if (err) throw err;
                res.write(data);
                res.end();
            })
        }  else if (queries && queries.rule=="3") {
            fs.readFile("./single_rules_EN/3.html", (err,data)=> {
                if (err) throw err;
                res.write(data);
                res.end();
            })
        }  else if (queries && queries.rule=="4") {
            fs.readFile("./single_rules_EN/4.html", (err,data)=> {
                if (err) throw err;
                res.write(data);
                res.end();
            })
        } else if (queries && queries.rule=="5") {
            fs.readFile("./single_rules_EN/5.html", (err,data)=> {
                if (err) throw err;
                res.write(data);
                res.end();
            })
        }  else if (queries && queries.rule=="6") {
            fs.readFile("./single_rules_EN/6.html", (err,data)=> {
                if (err) throw err;
                res.write(data);
                res.end();
            })
        }  else if (queries && queries.rule=="7") {
            fs.readFile("./single_rules_EN/7.html", (err,data)=> {
                if (err) throw err;
                res.write(data);
                res.end();
            })
        } else if (queries && queries.rule=="8") {
            fs.readFile("./single_rules_EN/8.html", (err,data)=> {
                if (err) throw err;
                res.write(data);
                res.end();
            })
        } else if (queries){
            res.write("Sorry this rule does not exists");
            res.end();
        }
        

        
        
    } else if (req.url==="/english") {
        fs.readFile("rules_en.txt", (err,data)=>{
            if (err) throw err;
            res.write(data);
            res.end();
        })
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
