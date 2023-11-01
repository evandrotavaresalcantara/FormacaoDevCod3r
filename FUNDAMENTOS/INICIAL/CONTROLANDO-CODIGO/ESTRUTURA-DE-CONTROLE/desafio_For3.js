// #
// ##
// ###
// ####
// #####

// É utilizado a variável conteúdo, porque o console.log não tem a opção de a próxima
// instrução ser na mesma linha

console.log("--- Meu Exemplo  ---");

let a = "-"
let b = "--"
let c = "---"
let d = "----"
let e = "-----"
let f = "------"

let linha = "";

for(let i = "-"; i === a || i === b || i === c || i === d || i === e || i === f; i += "-" ){
       linha += "#";
       console.log(linha);
}

console.log();

console.log("--- Exemplo Curso  ---");

for (let c = ""; c !== "#######"; c += "#"){
       console.log(c);
}
