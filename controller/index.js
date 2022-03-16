const express = require("express");

const app = express();

app.get("/", function(req, resp){
    resp.send("Bem-Vindo ao meu app");
})

app.get("/contato/:nome", function(req, resp){
    resp.send("<h1>Qualquer coisa"+req.params.nome+"</h1>");
})

//esta sempre dever ser a ultima linha quando usamos o express
app.listen(8082, function(){
    console.log("Servidor funcionando na URL http://localhost:8082");
});    