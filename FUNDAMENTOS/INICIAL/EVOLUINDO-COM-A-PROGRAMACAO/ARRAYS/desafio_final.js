const numeros = ['a','b','c','d']

function meuForEach(array, funcao) {
    for (let i = 0; i < array.length; i++) {
        funcao(array[i], i, array)
    }
}


function paraCadaElemento(elemento, indice, array) {
    console.log(elemento, indice, array)
}

meuForEach(numeros, paraCadaElemento)
console.log()
numeros.forEach(paraCadaElemento)