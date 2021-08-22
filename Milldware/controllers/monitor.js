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

function readLogServer1() {
	setInterval(() => {
		try {
			myServer1 = fs.readFileSync('/home/lab1/SD-lab1/Milldware/lastLogServer1.log', 'utf8');
			//Ruta DRO
			//myServer = fs.readFileSync(path, 'utf8');
			checkStatus(myServer1);
			console.log(myServer1);
		} catch (err) {
			console.error(err);
		}
	}, 1000);
}

function readLogServer2() {
	setInterval(() => {
		try {
			myServer2 = fs.readFileSync('/home/lab1/SD-lab1/Milldware/lastLogServer2.log', 'utf8');
			//Ruta DRO
			//myServer = fs.readFileSync(path, 'utf8');
			checkStatus(myServer2);
			console.log(myServer2);
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
			console.log('Error en el server');
		}
	}
}

const getLogs = (req, res) => {
	console.log('estoy dentro de getLogs');
	console.log(myServer2, 'test');
	res.render('home', {
		infoServer1: myServer1,
		infoServer2: myServer2,
	});
};

writeLogs();
readLogServer1();
readLogServer2();

module.exports = getLogs;
