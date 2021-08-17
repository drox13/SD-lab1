const express = require('express')

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

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
}

module.exports = Server;