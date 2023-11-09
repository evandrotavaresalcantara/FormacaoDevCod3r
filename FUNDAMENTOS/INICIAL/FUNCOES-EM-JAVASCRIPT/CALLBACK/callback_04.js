const path = require('path')
const fs = require('fs')

const caminho = path.join(__dirname,'..', 'dados','aprovados.txt')


const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())

console.log('fim')

fs.readFile()