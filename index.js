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

 function between(min, max) {  
   return Math.floor(
     Math.random() * (max - min) + min
   )
 }
 
 app.get('/status', (req, res) => {
   if(between(1,5) == 3) {
     res.sendStatus(500)
   } else {
     res.sendStatus(200)
   }
 })