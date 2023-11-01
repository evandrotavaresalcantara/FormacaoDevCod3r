// #1 - Função SEM parâmetros e SEM retorno

function exibirBomdia(){
    console.log('Bom dia')
}

exibirBomdia()
// #2 - Função COM parâmetros e SEM retorno
function exibirBomDiaPara(nome, msg){
    console.log(`Bom dia ${nome}! ${msg}`)
}
exibirBomDiaPara('Evandro','Não desista')

// #3 - Função SEM parâmetros e COM retorno
function numeroEntre0e10(){
    const numero = parseInt(Math.random() * 10)
    return numero
}
console.log(numeroEntre0e10())

// #4 - Função COM parâmetros e COM retorno

function somar(n1, n2){
    const resultado =  n1 + n2
    return resultado
}

console.log(somar(10,66))