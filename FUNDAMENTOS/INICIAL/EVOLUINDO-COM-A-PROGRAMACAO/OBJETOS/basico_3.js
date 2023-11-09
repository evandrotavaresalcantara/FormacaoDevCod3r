// Object.freeze() // congela o objeto ignora qualquer alteração

const data = {
    dia: 27,
    mes: 3,
    ano: 1987
}

console.log(`Objeto inicial: ${data}`,data)

data.dia = 28
data.mes = 4
data.ano = 1988
data.noFuturo = false

console.log(data.dia)
console.log(data.mes)
console.log(data.ano)

console.log(`${data.dia}/${data.mes}/${data.ano}`)
console.log(data)


