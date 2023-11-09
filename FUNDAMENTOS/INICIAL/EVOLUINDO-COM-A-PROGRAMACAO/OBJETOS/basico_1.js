const numeros = [1,2,3]
const produtoFilho = {
    nome: 'Objeto Filho'
}

// Objeto criado de forma literal!
const produto = {
    nome: 'Caneta BIC Preta',
    preco: 2.49,
    desconto: 0.2,
    altoCusto: false,
    nome: 'Caneta BIC Vermelha', //O último atributo repetido substitui o anterior
    objetoFilho: produtoFilho
}


console.log(produto['nome'])
console.log(produto['preco'])
console.log(produto['desconto'])

console.log(produto.nome)
console.log(produto.preco)
console.log(produto.desconto)
console.log(produto.altoCusto)

console.log(typeof produto)

produto['nome'] = 'Nome Alterado'
produto.preco = 9.9

console.log(produto)
