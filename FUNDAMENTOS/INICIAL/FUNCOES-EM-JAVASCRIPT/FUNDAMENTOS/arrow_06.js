// somar(3)(4)(5) parâmetros parciais

let somar = (a) => {  // Não tem retorno implícito
    return (b) => {  // Não tem retorno implícito
        return (c) => a + b + c // Essa Função tem um retorno implícito
    }
}
resultado = somar(3)(4)(5)
console.log(resultado)

somar = (a) => {  
    return (b) => (c) => a + b + c 
}
resultado = somar(3)(4)(5)
console.log(resultado)



somar = (a) => (b) => (c) => a + b + c 
resultado = somar(3)(4)(5)
console.log(resultado)
