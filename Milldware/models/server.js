const express = require('express')
const shell = require('shelljs')
const PORT = 8000;

class Server {

    constructor(){
        this.app = express();
        this.port = PORT;

        this.middleware();

        this.routes();

        this.writeLogs();
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
            //shell.exec('/home/lab1/SD-lab1/bash/ping.sh')
            //prueba Dro
            shell.exec('/home/dario/Documentos/SD-lab1/Milldware/pingdro.sh')
        }, 3000);
    }
}

module.exports = Server;