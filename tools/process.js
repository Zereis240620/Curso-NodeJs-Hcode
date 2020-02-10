require('./subdirectory/sub')
console.log('________________________________________________________________')
console.log(`Nome do Arquivo: `,__filename)
console.log(`Diretório do Arquivo: `,__dirname)
//console.log(`Parâmetros de execucao: `,process.argv)
console.log(`Diretório em que Foi Invocado : `,process.cwd())
console.log(`Sistema Operacional : `,process.env.OS)
console.log(`Usuario do Sistema Operacional : `,process.env.USERNAME)
console.log(`Idioma : `,process.env.LANG)
console.log(`Nome do Server : `,process.env.COMPUTERNAME)

switch(process.argv[2]){
	case '-a':
	console.log('execute rotina principal')
	break
	case '-i':
	console.log('Execute Instalação')
	break
	case '-q':
	console.log('Encerrando Aplicação')
		process.exit(); //Interrompe imediatamente o codigo
		break
		default :
		console.log('Parâmetro Inválido')
	}

	console.log(`Ambiente do Servidor: `,process.platform)


