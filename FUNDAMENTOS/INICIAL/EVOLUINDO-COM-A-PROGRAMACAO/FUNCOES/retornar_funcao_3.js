function calcularImpostoProduto(imposto){
    return function (preco)   {
        return (1 + imposto) * preco
    }
}


// Estado A
const impostoEstadoA = calcularImpostoProduto(0.5)
console.log(impostoEstadoA(10))
console.log(calcularImpostoProduto(0.5)(10)) //Parâmetro da função externa e o parâmetro da função interna


// Estado B
const impostoEstadoB = calcularImpostoProduto(0.3)
console.log(impostoEstadoA(10))