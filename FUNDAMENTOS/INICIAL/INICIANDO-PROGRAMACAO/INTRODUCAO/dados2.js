let valorProduto = 180;
let desconto = 35
let precoFinal =  valorProduto - (desconto/100  * valorProduto)

console.log(precoFinal);
console.log(valorProduto * (1 - desconto/100))


let nome = "Caderno";
let categoria = "Papelaria"

console.log(nome + categoria) // Concatenação e não operação de soma

console.log(nome + " " + categoria) 

console.log(nome, categoria)

console.log("Produto: " + nome + 
            ", Categoria: " + categoria, )


