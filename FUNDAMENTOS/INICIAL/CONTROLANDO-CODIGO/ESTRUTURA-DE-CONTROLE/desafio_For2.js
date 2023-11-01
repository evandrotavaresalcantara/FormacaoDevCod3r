// #
// ##
// ###
// ####
// #####

// É utilizado a variável conteúdo, porque o console.log não tem a opção de a próxima
// instrução ser na mesma linha

console.log("--- Meu Exemplo ---");
let conteudo = "";

for (let i = 1; i <= 6; i++) {
    for (j = 1; j <= i; j++) {  // Ao Sair do loop o j é reiniciado para 1 e o i permanece como valor
        conteudo += "#"
    }
    conteudo += "\n"
}

console.log(conteudo);


console.log("--- Exemplo Curso ---");
let linha = "";

for(let i = 1; i <= 6; i++){
    linha += "#"
    console.log(linha);
}