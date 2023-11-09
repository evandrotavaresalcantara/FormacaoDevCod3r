const notas = [7.3, 8.1, 9.2, 8.1, 6.3, 7.9, 5.0, 6.0, 8.9]

let totalNotas1 = 0
let mediaTurma1 = 0

for(let nota of notas){
    totalNotas1 += nota
}

mediaTurma1 = totalNotas1 / notas.length
console.log(`A nota da turma é: ${mediaTurma1}`)

let totalNotas2 = 0
let mediaTurma2 = 0

for (let i = 0; i < notas.length; i++){
    totalNotas2 += notas[i]
}

mediaTurma2  = totalNotas2 / notas.length
console.log(`A nota da turma é: ${mediaTurma2}`)

let totalNotas3 = 0
let mediaTurma3 = 0

for (let indice in notas){
    totalNotas3 += notas[indice]
}

mediaTurma3 = totalNotas3 / notas.length
console.log(`A nota da turma é: ${mediaTurma3}`)
