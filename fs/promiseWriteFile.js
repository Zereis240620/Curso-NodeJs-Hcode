const {writeFile} = require('fs')


function criaArquivo(name, context){

	return new Promise((resolve,reject) => {

		writeFile(name, context, err => {

			if(err) return reject(err)

				resolve()
		})
	})
}


criaArquivo('promiseArquivo.txt','Criando um arquivo utilizando promises')
.then(() => console.log('Arquivo promiseArquivo.txt criado com sucesso'))
.catch(err => console.log(err))