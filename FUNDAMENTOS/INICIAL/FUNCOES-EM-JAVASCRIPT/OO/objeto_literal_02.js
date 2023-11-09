const produto = {
    nome: 'Bola de Futsal',
    marca: 'Penalty',
    anoFabricacao: 2023,
    preco: 100,
    fragil: false,
    desconto: 0.15,
}

function precoComDesconto(produto) {
    return (1 - produto.desconto) * produto.preco
}

const precoFinal = precoComDesconto(produto)
console.log(`${produto.nome} tem o preço com disconto aplicado R$ ${precoFinal}`)
