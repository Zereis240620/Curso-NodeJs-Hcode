//Criando interface no prompt
const  readline  = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})


rl.question('Qual a melhor marca de Drones do Mundo ? \n R:',(answer) => {
	console.log(`A melhor marca de Drone é : ${answer}`)
	switch(answer){
		case "command" :
		console.log('Ligando o drone')
		break;
		case "takeoff":
		console.log('Decolando o Drone !')
		break;
		default:
		console.log('Ligue o Drone')
	}
	rl.close();
})