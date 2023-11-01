let conteudo = "";

console.log("======= Primeira Parte ============")
for (let coluna = 1; coluna <= 3; coluna++) {
    conteudo += `[1-${coluna}] `
}
console.log(conteudo);

conteudo = "";
console.log("\n");

console.log("======= Segunda Parte ============")
for (let linha = 1; linha <= 3; linha++) {
    for (let coluna = 1; coluna <= 3; coluna++) {
        conteudo += `[1-${coluna}] `
    }
}
console.log(conteudo)


conteudo = "";
console.log("\n");

console.log("======= Terceira Parte ============")
for (let linha = 1; linha <= 3; linha++) {
    for (let coluna = 1; coluna <= 3; coluna++) {
        conteudo += `[1-${coluna}] `
    }
    conteudo += "\n"
}
console.log(conteudo)

conteudo = "";
console.log("\n");

console.log("======= Final ============")
for (let linha = 1; linha <= 5; linha++) {
    for (let coluna = 1; coluna <= 5; coluna++) {
        conteudo += `[${linha}-${coluna}] `
    }
    conteudo += "\n"
}
console.log(conteudo)

