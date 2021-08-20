const shell = require('shelljs')
const fs = require('fs')

function writeLogs(){
	setInterval(() => {
		//shell.exec('/home/lab1/SD-lab1/bash/ping.sh');
		//prueba Dro
		shell.exec('/home/dario/Documentos/SD-lab1/Milldware/pingdro.sh')
	}, 1000);
}
var server1 = "";
function readLogServer1(){
	setInterval(() => {
	   try {
		   //server1 = fs.readFileSync('/home/lab1/SD-lab1/Milldware/lastLogServer1.log', 'utf8');
		   //Ruta DRO
		   server1 = fs.readFileSync('/home/dario/Documentos/SD-lab1/Milldware/lastLogServer1.log', 'utf8');
		   console.log(server1);
	   } catch (err) {
		   console.error(err);
	   }
   }, 1000);
}

var server2 =""
function readLastLogServer2() {
	setInterval(() => {
		try {
			//server2 = fs.readFileSync('/home/lab1/SD-lab1/Milldware/lastLogServer2.log', 'utf8');
			//ruta DRO
			server2 = fs.readFileSync('/home/dario/Documentos/SD-lab1/Milldware/lastLogServer2.log', 'utf8');
			console.log(server2);
		} catch (err) {
			console.error(err);
		}
	}, 1000);
}

const getLogs = (req, res) => {
	res.render('home', {
		infoServer1: server1,
		infoServer2: server2
	});
};

writeLogs();
readLogServer1();
readLastLogServer2();

module.exports = getLogs;
