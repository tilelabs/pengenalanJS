const http = require('http')

const server = http.createServer(function(req, res) {
    //menentukan tipe dokumen (html)
    res.writeHead(200, { 'Content-Type': 'text/html' })
    //Menampilkan tulisan pada html
    res.write('hello <b>World</b>')
    res.end()
})

//port localhost
server.listen(8000);
console.log("server running on http://localhost:8000");

