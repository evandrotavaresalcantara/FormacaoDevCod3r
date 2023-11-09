let numeros = [1, 2, 3, 4, 5, 4]

numeros[0] = 100
numeros.push(444)


console.log(numeros.indexOf(3,4)) // Indice a partir da posição 4
console.log(numeros.indexOf(100))
console.log(numeros.includes(1,3)) // Busca a partir do indice 3
console.log(numeros.includes(4))
console.log(numeros.includes(888))
console.log(numeros.join(' - '))


const numeros2 = numeros.concat("a", "b", "c")
console.log(numeros2)
