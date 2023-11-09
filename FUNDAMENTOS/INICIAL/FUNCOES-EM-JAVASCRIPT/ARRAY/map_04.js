const carrinho = [
    { nome: 'Caneta', qtd: 2, preco: 1.3 },
    { nome: 'Borracha', qtd: 2, preco: 0.9 },
    { nome: 'Tesoura', qtd: 2, preco: 2.3 },
    { nome: 'Lapis', qtd: 2, preco: 1.0 },
    { nome: 'Caderno', qtd: 2, preco: 3.3 },
]

const apenasNome = produto => produto.nome
const apenasPreco = produto => produto.preco
const calcularTotalProduto = produto => produto.qtd * produto.preco

const calcularTotalCarrinho = totalProduto => {
    let totalCarrinho = 0
    for (let produto of totalProduto){
        totalCarrinho += produto
    }
    return totalCarrinho
}

console.log(carrinho.map(apenasNome))
console.log(carrinho.map(apenasPreco))
console.log(carrinho.map(calcularTotalProduto))
console.log(calcularTotalCarrinho(carrinho.map(calcularTotalProduto)))

