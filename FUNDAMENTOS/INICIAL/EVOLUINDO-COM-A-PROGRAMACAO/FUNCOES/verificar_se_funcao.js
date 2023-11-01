let numero = 3
let texto = 'Bom dia'

function somar(n1, n2){
    return n1 + n2
}

const alias = somar

console.log(typeof numero)
console.log(texto)
console.log(typeof somar)
console.log(typeof alias)
console.log(typeof alias === 'function')
