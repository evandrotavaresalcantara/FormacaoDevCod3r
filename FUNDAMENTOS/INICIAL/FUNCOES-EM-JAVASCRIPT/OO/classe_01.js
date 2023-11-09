class Data {
    constructor(dia, mes, ano){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const d1 = new Data(25,12,2028)
const d2 = new Data(24,12,2030)

console.log(typeof d1, d1)
console.log(typeof d2, d2)
console.log(typeof Data)
