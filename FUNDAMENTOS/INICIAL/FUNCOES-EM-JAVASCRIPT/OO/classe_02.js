class Data {
    constructor(dia, mes, ano){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
    
    // Não precisa da palavra function e nem na =>
    dataFormatada (){   
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const d1 = new Data(25,12,2028)
const d2 = new Data(24,12,2030)

console.log(d1.dataFormatada())
console.log(d2.dataFormatada())

