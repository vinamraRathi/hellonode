var http = require('http')


http.createServer(function(req, res){
    const html = `
    <div style='border: solid black 2px; text-align:center; background-color:aqua;'>
    <h1>Hello World</h1>
    </div>
    `; 
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end(html);

}).listen(8080)

console.log("Hello World")