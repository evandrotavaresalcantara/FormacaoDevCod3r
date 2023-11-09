const nomes = ['Evandro', 'Software', 'DesenvolvimentoWeb']

function praCadaElemento(elemento, indice, array) {
    console.log(elemento, indice, array)
}
nomes.forEach(praCadaElemento)


nomes.forEach(function (elemento) {
    console.log(elemento, 2024)
})

nomes.forEach(function (_, indice, _) {
    console.log(indice)
})