const express = require('express');
const router = express.Router();
const response  =require('./networks/response')
var app = express();
app.use(router);
app.use(express.json());




app.get('/message',function(req,res){
    console.log(req.headers)
    res.header({
        "custom-header":"Nuestro valor personalizado"
    })
    // res.send('Lista de mensjaes');

    response.success(req,res,'Lista de mensajes')
})


app.post('/message',function(req,res){
    console.log(req.query);
    if(req.query.error == "ok"){
        response.error(req,res,"error inespera",500, "Es una simulasion de los errores")
    }else{

        response.success(req,res,'Creado correctamente',201)
    }
    // res.status(201).send({err:'Ha ocurrido un error', message:'Creado Correctamente'})
});

app.use('/app', express.static('public'));

app.listen(3080);