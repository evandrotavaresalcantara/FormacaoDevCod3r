const array1 = [1, 2, 3, 4, 5]

const callbackfn = (elemento, indice, array) => elemento + 100
let array2 = array1.map(callbackfn)

console.log(array1)
console.log(array2)

console.log()

const dobro = array1.map((elemento) => elemento * 2 )

console.log(array1)
console.log(dobro)




