const { spawn } = require("child_process")
const ls = spawn('cls')


ls.stdout.on('data', (data) => {
	console.log(`stdout: ${data}`)
})


ls.stderr.on('data', (data) => {
	console.log(`stdorr: ${data}`)
})


ls.on('close',(code) => {
	console.log(`Processo em segundo plano finalizado com código ${code}`)
})
