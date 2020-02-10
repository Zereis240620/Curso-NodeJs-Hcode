const EventEmitter = require('events');

class Evento extends EventEmitter {}

const meuEvento = new Evento();


meuEvento.on('seguranca', (x,y) => {
	console.log(`Executando o evento 'segunranca' : ${x} ${y}`)

})


meuEvento.emit('seguranca','userAdmilson', 'Alterou Salário')