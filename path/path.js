const path = require('path')

console.log('base Name',path.basename(__dirname+'../file.txt'))

console.log('normalize',path.normalize(__dirname+'../fs\\arquivo.txt'))

console.log('join path',path.join('teste','teste2','teste3/teste4','dir2','..'))

console.log('resolve',path.resolve('path.js'))


console.log('extension',path.extname('path.js'))
