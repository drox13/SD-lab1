const express = require('express')
const PORT = 8000;
const shell = require('shelljs')

class Server {

    constructor(){
        this.app = express();
        this.port = PORT;

        this.middleware();

        this.routes();
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

    yourFunction(){
        shell.exec('/home/lab1/SD-lab1/bash/ping.sh')
        setTimeout(yourFunction, 1000);
      }
}

module.exports = Server;