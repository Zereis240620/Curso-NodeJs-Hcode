//forçar erro

//throw new Error('Ah não deu erro, na minha maquina funciona')

// tente executar alguma coisa se der erro execute o cath automaticamente
function execute() {
	executeTo();
}

function executeTo(){
	throw new Error('Ah não deu erro, na minha maquina funciona')
}

function init(){

	try{
		execute();
	}catch(error){
		console.log('Temos um problema !',error.message)
	}

}

init();

console.log('Depois do Erro')

