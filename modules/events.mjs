//Modulo experimental nodejs para executar precisa node --experimental-modules events.mjs

import {EventEmitter} from'events';

class Evento extends EventEmitter {}

const meuEvento = new Evento();


meuEvento.on('seguranca', (x,y) => {

console.log(`Executando o evento 'segunranca' : ${x} ${y}`)

})


meuEvento.emit('seguranca','userAdmilson', 'Alterou Salário')