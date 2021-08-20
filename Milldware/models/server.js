const express = require('express');
const shell = require('shelljs');
const fs = require('fs');
const PORT = 8000;

class Server {
	constructor() {
		this.app = express();
		this.port = PORT;

		this.app.set('view engine', 'hbs');

		this.middleware();

		this.routes();
	}

	middleware() {
		this.app.use(express.static('public'));
	}

	routes() {
		this.app.use('/', require('../routes/monitor'));
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Server on! PORT ${this.port}`);
		});
	}
}

module.exports = Server;
