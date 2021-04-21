const express = require('express');
const router = express.Router();

var app = express();
app.use(router);
app.use(express.json());

app.get('/message',function(req,res){
    res.send('Lista de mensjaes');
})
app.delete('/message',function(req,res){
    console.log(req.body)
    res.send('Mensaje añadido')
})

app.listen(3080);