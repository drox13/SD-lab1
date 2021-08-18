//Servidores
var express = require('express');
var app = express();
const port = 8000;

app.get('/', function(req, res){
   res.send("Este es el Server !");
});

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`);
 });