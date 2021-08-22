const shell = require('shelljs');
const fs = require('fs');

var myServer1 = '';
var myServer2 = '';

function writeLogs() {
	setInterval(() => {
		shell.exec('/home/lab1/SD-lab1/bash/ping.sh');
		//prueba Dro
		//shell.exec('/home/dario/Documentos/SD-lab1/Milldware/pingdro.sh');
	}, 1000);
}

function readLogServer(path, server) {
	setInterval(() => {
		try {
			server = fs.readFileSync(path, 'utf8');
			//Ruta DRO
			//myServer = fs.readFileSync(path, 'utf8');
			//checkStatus(server);
			console.log(server);
		} catch (err) {
			console.error(err);
		}
	}, 1000);
}

function checkStatus(server) {
	let data = server.split(' ');
	console.log('data: ', data);
	for (let index = 0; index < data.length; index++) {
		const status = data[0];
		if (status != 200) {
		}
	}
}

const getLogs = (req, res) => {
	console.log('estoy dentro de getLogs');
	console.log(myServer2);
	res.render('home', {
		infoServer1: myServer1,
		infoServer2: myServer2,
	});
};

writeLogs();
readLogServer('/home/lab1/SD-lab1/Milldware/lastLogServer1.log', myServer1);
readLogServer('/home/lab1/SD-lab1/Milldware/lastLogServer2.log', myServer2);

module.exports = getLogs;
