function minhaFuncao(){
   return ('Olá sou uma função viajante')
}

const funcaoViagante = minhaFuncao


function nivelA(funcao){
    console.log('Sou o nivelA, recebi a funcão')
    nivelB(funcao)
}

function nivelB(funcao){
    console.log('Sou o nivelB, recebi a funcão')
    nivelC(funcao)
}

function nivelC(funcao){
    console.log('Sou o nivelC, recebi a função e vou executá-la')
    console.log(funcao())
}

nivelA(funcaoViagante)