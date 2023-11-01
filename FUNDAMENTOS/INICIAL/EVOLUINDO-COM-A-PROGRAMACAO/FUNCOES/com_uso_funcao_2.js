function exibirDataDetalhada(dia, mes, ano) {
    console.log(`Dia: ${dia}`)
    console.log(`Mês: ${mes}`)
    console.log(`Ano: ${ano}`)
}

function exibirData(dia, mes, ano) {
    console.log(`${dia} de ${mes} de ${ano}`)
}

const d1 = 7;
const m1 ='Maio'
const a1 = 2022

const d2 = 24
const m2 = 'Dezembro'
const a2 = 2024

exibirDataDetalhada(30, "Novembro", 2023)
console.log()
exibirDataDetalhada(d1, m1, a1)
console.log()
exibirData(d1, m1, a1)
console.log()
exibirData(d2, m2, a2)

