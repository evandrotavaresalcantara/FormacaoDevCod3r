// Indexada: incia no zero
const notas = [7.8, 7.3, 5.8, 9.8, 8.3, 10]
const notasFixa = Object.freeze([7, 8, 9]) 


console.log(notas)
console.log(notas[3])

notas[2] = 8.5

console.log(notas[2])
console.log(notas)

// notas = [1, 2, 3] // Não é possível alterar a constante, pode alterar o elemente que está dentro da constante

notas[6] = 6
notas[7] = 7

console.log(notas)

notas[10] = 150

console.log(notas)

console.log(notas[150])
