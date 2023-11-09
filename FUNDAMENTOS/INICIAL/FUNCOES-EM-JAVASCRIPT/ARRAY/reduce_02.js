const carrinho = [
    { nome: 'Caneta', qtd: 2, preco: 5 },
    { nome: 'Borracha', qtd: 2, preco: 1 },
    { nome: 'Tesoura', qtd: 2, preco: 3 },
    { nome: 'Lapis', qtd: 2, preco: 1 },
    { nome: 'Caderno', qtd: 2, preco: 3 },
]


const totalProduto = produto => produto.qtd * produto.preco
const totalizar = (total, valor) => total + valor

const precoTotal = carrinho.map(totalProduto).reduce(totalizar, 0) // passa o total no segundo parâmetro
                                                                   // chama callback passando o total no primeiro parâmetro            

console.log(precoTotal)