function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibirData: function () {
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    }
}

const data1 = criarData(28,4,1988)
const data2 = criarData(29,4,1988)
const data3 = criarData(30,4,1988)

console.log(data1.exibirData())
console.log(data2.exibirData())
console.log(data3.exibirData())

const data4 = criarData
console.log(data4(1,1,1970).exibirData())




