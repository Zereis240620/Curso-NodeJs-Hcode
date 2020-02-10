console.log('Exibindo uma mensagem no console')

console.error(new Error('Exibindo Mensagem de Erro Temos Problemas!'))

const carros = ['GM','FIAT','FORD','VW','Renault','Honda','Hyundai']

console.table(carros);


const dados = {name: 'José Reis', empresa: 'X-Men Software Developer'}

console.table(dados);

console.count('processo')
console.count('processo')
console.count('processo')

console.log('Resetando o processo')
console.countReset('processo')

console.count('processo')

console.time('contador')

for(let index = 0; index < 100; index++){
	//console.log('__')
}

console.timeEnd('contador')


console.assert(true,'Faça alguma coisa');

console.log(false,'Ih rapaz %s','Não Funcionou')

//Limpa todos os dados do console
//console.clear();