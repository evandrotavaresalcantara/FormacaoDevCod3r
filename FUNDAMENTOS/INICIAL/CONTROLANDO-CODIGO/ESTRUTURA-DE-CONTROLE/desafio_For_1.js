
// [1-1]  [1-2]  [1-3] 
// [2-1]  [2-2]  [2-3] 
// [3-1]  [3-2]  [3-3] 

let conteudo = '';

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {
        conteudo += ` [${i}-${j}]`
    }
    console.log(conteudo);
    conteudo = '';
}

console.log("Outro Exemplo:")
let conteudo2 = ""

for (let linha = 1; linha <= 3; linha++) {
    for (let coluna = 1; coluna <= 3; coluna++) {
        conteudo2 += `[${linha}-${coluna}] `
    }
    conteudo2 += '\n';
}
console.log(conteudo2);