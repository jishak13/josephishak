var express = require('express');
var app = express();

app.get('/', (req,res) => {
    res.send('ello world');
});

app.listen(80, () => {
    console.log("App listening on port 80");
});