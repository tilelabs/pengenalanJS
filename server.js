var http =require('http')

var server = http.createServer(function(reg, res){
    res.end("Hi, Selamat datang di nodejs");
});

server.listen(8000);
console.log("sever running on http://localhost:8000")