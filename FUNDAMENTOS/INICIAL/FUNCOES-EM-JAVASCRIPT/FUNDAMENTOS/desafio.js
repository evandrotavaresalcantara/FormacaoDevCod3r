let a = 3
let b = 7

const multiplicar = (a, b) => a * b
const somar = (a, b) => a + b
const subtrair = (a, b) => a - b


const calcular = (a) => {
    return (b) => {
        return (fn) => {
            return fn(a, b)
        }
    }
}
const resultado = calcular(a)(b)(subtrair)
console.log(resultado)

const calcular2 = a => b => fn => fn(a, b)
const resultado2 = calcular2(a)(b)(subtrair)
console.log(resultado2)