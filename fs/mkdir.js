const fs = require('fs')

const assets = ['css','js', 'img', 'fonts','lib']


function make(dir){

	dir.forEach((item) => {

		fs.mkdir(`projeto/assets/${item}`,{recursive: true}, (err,data) => {
			if(err) throw err;

			console.log('Diretorio Criado Com Sucesso', item)
		})
	})


}


make(assets);