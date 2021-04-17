const express = require('express')

var app = express();

app.use('/',function(req,resp){
    resp.send('Hola');
});

app.listen(3080);