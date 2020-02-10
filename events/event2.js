const {EventEmitter} = require('events');

class Evento extends EventEmitter{}

const meuEvento = new Evento();

//subscriber || assinante
meuEvento.on('seguranca', (x,y) => {
	console.log(`Executando o evento 'segunranca' : ${x} ${y}`)

})

meuEvento.emit('seguranca','userAdmilson', 'Alterou Salário')


meuEvento.on('encerrar', (dados) => {
	console.log('Assinante: '+dados)
})


meuEvento.emit('encerrar','Encerrando a execução da importação dos dados!')