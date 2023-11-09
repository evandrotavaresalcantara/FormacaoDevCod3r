const carrinho = [
    { nome: 'Caneta', qtd: 2, preco: 5, fragil: false },
    { nome: 'Borracha', qtd: 2, preco: 1, fragil: false },
    { nome: 'Tesoura', qtd: 2, preco: 3, fragil: false },
    { nome: 'Lapis', qtd: 2, preco: 1, fragil: false },
    { nome: 'Caderno', qtd: 2, preco: 3, fragil: false },

    { nome: 'Lente', qtd: 2, preco: 100, fragil: true },
    { nome: 'Vidro', qtd: 2, preco: 300, fragil: true },
    { nome: 'Tarça', qtd: 2, preco: 100, fragil: true },
    { nome: 'Tv', qtd: 3, preco: 1000, fragil: true },
]

const ehFragil = produto => produto.fragil
const totalProduto = produto => produto.qtd * produto.preco
const totalizador = (total, valor) => total + valor

const produtosFragil = carrinho.filter(ehFragil)

const resultado = produtosFragil
    .map(totalProduto)
    .reduce(totalizador, 0)

const media = resultado / produtosFragil.length

console.log(media)