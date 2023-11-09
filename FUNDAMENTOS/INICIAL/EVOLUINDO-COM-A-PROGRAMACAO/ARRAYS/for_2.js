const numeros = [1, 2, 4, 56, 7, 8, 8, 9, 22]

for (let numero of numeros){
    console.log(`Item =>  ${numero}`)
}

console.log()

for (let indice in numeros){
    console.log(`Indice ${indice} => Item ${numeros[indice]}`)
}

console.log()

console.log(numeros.length)
