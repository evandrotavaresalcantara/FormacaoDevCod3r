let x = 10;
let y = x;

console.log(x, y);
console.log();

x += 200; // Não está substituindo o valor da variável, e sim atribuindo
console.log(x, y);
console.log()

x -= 55;
console.log(x, y);
console.log()

x *= 5;
console.log(x, y);
console.log()

x /= 10;
console.log(x, y);
console.log()


x +="texto"; 
console.log(x, y);
console.log()

console.log('----------')

let soma = x + 333; // x apesar de ser number ficou impossiblitar de realizar outras operações exceto + que faz a concatenação
console.log(soma);

x -= "texto"; 
console.log(x,y);
console.log()

let saudacao = "Bom dia";
saudacao += "!!!!!"
console.log(saudacao);

console.log("------------------")

