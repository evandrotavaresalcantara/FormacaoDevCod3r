const array1 = [1, 2, 3, 4, 5]
const array2 = []

for (i = 0; i < array1.length; i ++){
    const elementoTransformado = array1[i] + 100
    array2.push(elementoTransformado)
}

console.log(array1)
console.log(array2)

