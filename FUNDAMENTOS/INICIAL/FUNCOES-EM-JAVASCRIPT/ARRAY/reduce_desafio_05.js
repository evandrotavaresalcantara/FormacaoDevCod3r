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
    const tamanhoArray = array.length
    const ultimoElemento = indice === array.length -1
    const novoTotal = acumulador + valor
    console.log(tamanhoArray, ultimoElemento)
    
    return ultimoElemento? novoTotal / tamanhoArray : novoTotal
}

const resultado = carrinho
    .filter(ehFragil)
    .map(totalProduto)
    .reduce(media, 0) 
console.log(resultado)

