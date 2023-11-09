const numeros = [1, 2, 3, 4, 5, 6, 8, 9, 10]

const numeroPar = numero => numero % 2 === 0

console.log(numeros.filter(numeroPar))
