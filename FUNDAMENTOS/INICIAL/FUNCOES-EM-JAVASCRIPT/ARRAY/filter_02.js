const carrinho = [
    { nome: 'Caneta', qtd: 0, preco: 1.3 },
    { nome: 'Borracha', qtd: 2, preco: 0.9 },
    { nome: 'Tesoura', qtd: 2, preco: 2.3 },
    { nome: 'Lapis', qtd: 1, preco: 1.0 },
    { nome: 'Caderno', qtd: 0, preco: 3.3 },
]

const qtdMaiorQueZero = produto => produto.qtd > 0
const apenasNome = produto => produto.nome

console.log(carrinho.filter(qtdMaiorQueZero))
console.log(carrinho.filter(qtdMaiorQueZero).map(apenasNome))
