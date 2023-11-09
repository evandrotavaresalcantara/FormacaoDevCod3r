function precoComDesconto(preco, desconto){
    return preco * (1 - desconto)
}

const produto = {
    nome: 'TvBox',
    preco: 400.00,
    desconto: 0.05,
    precoComDesconto: function (){ //  Método
        return this.preco * (1 - this.desconto)
    }
}

console.log(`Preço de tabela ${produto.preco}`)
console.log(`Preço com Desconto ${produto.precoComDesconto()}`)
console.log(`Preço com Desconto ${precoComDesconto(produto.preco, produto.desconto)}`)
