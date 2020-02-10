
console.log('Executando modulo-01.js')

//implementando const na function oculta limita seu escopo

const oculta = () => {
	console.log('Executando função oculta')
}

const executa = () =>{
	console.log('Executando a função executa');
}

const welcome= `Bem vindo ao módule-01.js`

module.exports = {executa,welcome,oculta}

//REPL

