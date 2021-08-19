function writeLogs() {
	setInterval(() => {
		shell.exec('/home/lab1/SD-lab1/bash/ping.sh');
		//prueba Dro
		//shell.exec('/home/dario/Documentos/SD-lab1/Milldware/pingdro.sh')
	}, 1000);
}

function readLastLogServer1() {
	setInterval(() => {
		try {
			let server1 = fs.readFileSync('/home/lab1/SD-lab1/Milldware/lastLogServer1.log', 'utf8');
			//Ruta DRO
			//const server1 = fs.readFileSync('/home/dario/Documentos/SD-lab1/Milldware/lastLogServer1.log', 'utf8');
			console.log(server1);
		} catch (err) {
			console.error(err);
		}
	}, 1000);
}

function readLastLogServer2() {
	setInterval(() => {
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

const getLogs = (req, res) => {
	res.render('home', {
		info: server1,
	});
};

writeLogs();
readLastLogServer1();

module.exports = getLogs;
