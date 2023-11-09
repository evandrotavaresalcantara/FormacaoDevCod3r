const a = 8
console.log(a)

// Function Declation
function bomDia() {
    console.log('Bom dia!')
}

bomDia()


// Function express
const boaTarde = function () {
    console.log('Boa tarde!')
}

boaTarde() // undefined console.log(boaTarde()) função não retorna nada


function somar(a = 0, b = 0) {
    return a + b
}

let resultado = somar(3, 4)
console.log(resultado)

resultado = somar(3)
console.log(resultado)

resultado = somar(3, 4, 5, 6, 7)
console.log(resultado)

resultado = somar()
console.log(resultado)