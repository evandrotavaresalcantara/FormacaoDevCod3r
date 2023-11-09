const nomes = ['Html', 'Css', 'JavaScript']

const primeiraLetra1 = (nome) => nome.charAt(0)
const primeiraLetra2 = (texto) => texto[0]

const letras = nomes.map(primeiraLetra1)

console.log(nomes)
console.log(letras)

