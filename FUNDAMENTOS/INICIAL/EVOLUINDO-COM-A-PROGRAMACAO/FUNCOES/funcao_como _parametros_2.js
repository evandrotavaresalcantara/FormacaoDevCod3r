function executar(funcao, a = 10, b = 5) {
    console.log(funcao(a, b))
}

function bomDia() {
    return 'Bom dia'
}

function somar(a, b) {
    return a + b
}

function subtrair(a, b){
    return a - b
}

executar(somar,100,10) // executar(somar(100,10)) inválido. Isso já é o resultado da função somar.
executar(subtrair,100,10)