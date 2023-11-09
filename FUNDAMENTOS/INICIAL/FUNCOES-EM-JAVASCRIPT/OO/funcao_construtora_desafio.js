// Função construtora  -> Produto
// nome, preco, desconto

function Produto(nome, preco, desconto = 0){
    this.nome = nome
    this.preco  = preco
    this.desconto = desconto

    this.precoFinal = () =>{
         return (1 - this.desconto) * this.preco
    }
}

const p1 = new Produto('TvBox', 450, 0.20)
console.log(`Preço fianal com desconto do  ${p1.nome}: ${p1.precoFinal()}`)

const p2 = new Produto('Tv42', 1800, 0.10)
console.log(`Preço fianal com desconto da  ${p2.nome}: ${p2.precoFinal()}`)