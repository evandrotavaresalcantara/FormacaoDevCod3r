// somar(3)(4)(5) parâmetros parciais

let somar = a => {
    return b => {
        return c => {
            return a + b + c
        }
    }
}

resultado = somar(3)(4)(5)
console.log(resultado)

somar = a => b => c => a + b + c

resultado = somar(3)(4)(5)
console.log(resultado)