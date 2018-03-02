var express = require('express');
var http = require('http');
var app = express();

var httpServer = http.createServer(app);


httpServer.listen(80, () => {
    console.log("App listening on port 80");
});

app.get('/', (req,res) => {
    res.send('ello world');
});