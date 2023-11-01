function MinhaFuncao(funcao) {

    if (typeof funcao === 'function') {
        const resultado = funcao()
        console.log(resultado)
    }

}


function funcao() {
    return 'Olá sou uma função e fui chamada'
}


MinhaFuncao(funcao)
MinhaFuncao(function () { return 'Olá sou uma função anônima' })
MinhaFuncao(() => 'Olá sou uma função lambda')
MinhaFuncao('Texto') // Gera erro ao tentar passar algo que não é função