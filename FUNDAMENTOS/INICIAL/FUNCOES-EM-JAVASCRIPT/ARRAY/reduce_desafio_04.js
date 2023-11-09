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

const media = (acumulador, valor, indice, array) => {
    console.log(acumulador, valor, indice, array)

}

const resultado = carrinho
    .filter(ehFragil)
    .map(totalProduto)
    .reduce(media, 0) 
console.log(resultado)

// Na segunda iteração do reduce no array o valor do acumulador 
// é undefined porque não foi enviando nenhum valor através do return
// o reduce retorna o que está na função passada