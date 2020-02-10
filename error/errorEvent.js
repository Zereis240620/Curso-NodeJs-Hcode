const {EventEmitter} = require('events');
const emitter = new EventEmitter();


// se não for objeto estoura erro
const validaObjeto = (a) => {
	if (typeof a !== 'object') {
		emitter.emit('error', new Error('Tipo informado inválido'))
	}else{	
		console.log('Objeto Valido') 
	}	
}


emitter.addListener('error', (err) => {
	console.log('Evento: ', err.message)
})


let dados = {name: 'josé', course: "X-Men Software"}

validaObjeto(dados/*'123'*/)