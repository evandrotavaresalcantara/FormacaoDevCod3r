const d1 = 7;
const m1 ='Maio'
const a1 = 2022

const d2 = 24
const m2 = 'Dezembro'
const a2 = 2024


function exibirData1() {
    console.log(`Dia: ${d1}`)
    console.log(`Mês: ${m1}`)
    console.log(`Ano: ${a1}`)
    console.log(`${d1} de ${m1} de ${a1}`)
    console.log()
}

function exibirData2() {
    console.log(`Dia: ${d2}`)
    console.log(`Mês: ${m2}`)
    console.log(`Ano: ${a2}`)
    console.log(`${d2} de ${m2} de ${a2}`)
}


exibirData1()
exibirData2()

for (let i = 1; i <= 10; i++){
    exibirData1()
}
