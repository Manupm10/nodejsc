var http = require('http');
http.createServer(function(req,res){
    res.write("Hello World! Welcome ");
    res.end();
}).listen(8080);