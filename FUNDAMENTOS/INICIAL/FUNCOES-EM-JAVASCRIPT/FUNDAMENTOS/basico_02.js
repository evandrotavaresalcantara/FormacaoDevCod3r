function bomDia(){
    console.log('Bom dia')
}

function boaTarde(){
    console.log('Boa tarde')
}

// Passar uma função como parâmetro para outra função
function executar(x){
    if(typeof x === 'function'){
        x()
    }
}

executar(1)
executar('texto')
executar(bomDia) // bomDia() é diferente de bomDia
executar(boaTarde)


// Retornar uma função a partir de uma outra função
// Permite passar os parâmetros de forma parcial
function potencia(expoente) {
    // parte da lógica...
    return function (base){
        return Math.pow(base, expoente)
    }
}

const aoQuadradoA = potencia(2)
console.log(aoQuadradoA(4))

const aoQuadradoB = potencia(2)(3)
console.log(aoQuadradoB)

const aoCubo = potencia(3)
console.log(aoCubo(5))
