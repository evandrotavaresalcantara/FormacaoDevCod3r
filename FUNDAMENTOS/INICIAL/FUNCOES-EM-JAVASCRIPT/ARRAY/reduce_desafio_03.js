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

const media = (acumulador, valor) => {
    const qtd = acumulador.qtd + 1
    const total = acumulador.total + valor
    console.log(acumulador)
    return { qtd, total, media: total / qtd }

}

const resultado = carrinho
    .filter(ehFragil)
    .map(totalProduto)
    .reduce(media, { qtd: 0, total: 0, media: 0 }) // O acumulador é um objeto e valor trabalho é o item do objeto

console.log(resultado)