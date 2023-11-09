const primeroElemento = array => array[0]
const primeiraLetra = nome => nome[0]
// Pode refazer o código com um única função pois realizar a mesma funcionalidade

const promessa = new Promise((resolve) =>{

    resolve(['Evandro','Desenvolvedor de Software'])

})

promessa
.then(array => primeroElemento(array))
.then(elemento => primeiraLetra(elemento))
.then(letra => letra.toLowerCase())
.then(resultado => console.log(resultado))

console.log('fim')