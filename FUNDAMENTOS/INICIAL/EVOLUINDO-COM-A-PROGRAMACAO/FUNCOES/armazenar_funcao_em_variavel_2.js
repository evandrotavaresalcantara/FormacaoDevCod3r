// É possível armazer em uma variável uma FUNCTION DECLARATION
// e uma FUNCTION EXPRESS

function multiplicar(n1, n2){
   return n1 * n2
}

const multiplicacao = function (n1, n2){
   return n1 * n2
}
const alias1 = multiplicar
const alias2 = multiplicacao

console.log(multiplicar(4,5))
console.log(multiplicar)
console.log(multiplicacao(4,5))
console.log(multiplicacao)

