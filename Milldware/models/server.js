const express = require('express')
const shell = require('shelljs')
const fs = require('fs')
const PORT = 8000;

class Server {

    constructor(){
        this.app = express();
        this.port = PORT;

        this.middleware();
        
        this.routes();

        this.writeLogs();

        this.readLastLogServer1();
        this.readLastLogServer2();
    }
    
    middleware(){
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use('/', require('../routes/monitor'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server on! PORT ${this.port}`)
        })
    }
    
    writeLogs(){
        setInterval(()=>{ 
            shell.exec('/home/lab1/SD-lab1/bash/ping.sh')
            //prueba Dro
            //shell.exec('/home/dario/Documentos/SD-lab1/Milldware/pingdro.sh')
        }, 1000);
    }

    readLastLogServer1(){
        setInterval(()=>{
            try {
                const server1 = fs.readFileSync('/home/lab1/SD-lab1/Milldware/lastLogServer1.log', 'utf8');
                //Ruta DRO
                //const server1 = fs.readFileSync('/home/dario/Documentos/SD-lab1/Milldware/lastLogServer1.log', 'utf8');
                console.log(server1);
              } catch (err) {
                console.error(err);
              }
        },1000);
    }

    readLastLogServer2(){
        setInterval(()=>{
            try {
                const server2 = fs.readFileSync('/home/lab1/SD-lab1/Milldware/lastLogServer2.log', 'utf8');
                //ruta DRO
                //const server2 = fs.readFileSync('/home/dario/Documentos/SD-lab1/Milldware/lastLogServer2.log', 'utf8');
                console.log(server2);
              } catch (err) {
                console.error(err);
              }
        }, 1000);
    }
}

module.exports = Server;