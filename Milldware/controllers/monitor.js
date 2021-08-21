const shell = require('shelljs');
const fs = require('fs');

var myServer = '';

function writeLogs() {
	setInterval(() => {
		shell.exec('/home/lab1/SD-lab1/bash/ping.sh');
		//prueba Dro
		//shell.exec('/home/dario/Documentos/SD-lab1/Milldware/pingdro.sh');
	}, 1000);
}

function readLogServer(path) {
	setInterval(() => {
		try {
			myServer = fs.readFileSync(path, 'utf8');
			//Ruta DRO
			//myServer = fs.readFileSync(path, 'utf8');
			checkStatus(myServer);
			console.log(myServer);
		} catch (err) {
			console.error(err);
		}
	}, 1000);
}

function checkStatus(server) {
	let data = server.split(' ');
	for (let index = 0; index < data.length; index++) {
		const status = data[0];
		if (status != 200) {
		}
	}
}

const getLogs = (req, res) => {
	res.render('home', {
		infoServer1: server1,
		infoServer2: server2,
	});
};

writeLogs();
readLogServer('/home/lab1/SD-lab1/Milldware/lastLogServer1.log');
readLogServer('/home/lab1/SD-lab1/Milldware/lastLogServer2.log');

module.exports = getLogs;
