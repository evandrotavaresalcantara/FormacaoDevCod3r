const produto = {
    nome: 'Bola de Futsal',
    marca: 'Penalty',
    anoFabricacao: 2023,
    preco: 100,
    fragil: false,
    desconto: 0.15,
    precoComDesconto: function(){
         return (1 - this.desconto) * this.preco
    }
}

const produtoFinal = produto.precoComDesconto()
console.log(`${produto.nome} tem o preço com disconto aplicado R$ ${produtoFinal}`)
