const carrinho = [
    { nome: 'Caneta', qtd: 2, preco: 5 },
    { nome: 'Borracha', qtd: 2, preco: 1 },
    { nome: 'Tesoura', qtd: 2, preco: 3 },
    { nome: 'Lapis', qtd: 2, preco: 1 },
    { nome: 'Caderno', qtd: 2, preco: 3 },
]

const totalCarrinho = (total, produto) => {
    console.log(total, produto)
    return total + (produto.qtd * produto.preco)
}

console.log(carrinho.reduce(totalCarrinho,0)) // é passado uma funcao e um total (0) o reduce 
                                             // chama a função totalCarrinho() passando inicialmente
                                             // o 0 e o primeiro elemento