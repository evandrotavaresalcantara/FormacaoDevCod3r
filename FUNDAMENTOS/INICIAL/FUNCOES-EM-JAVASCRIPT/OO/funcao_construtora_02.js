function Data(dia, mes, ano){
    this.dia = dia 
    this.mes =  mes
    this.ano = ano

    this.dataFormatada = function() {
       return `${this.dia}/${this.mes}/${this.ano}`
    }

}

// Método de instância público (comportamento) 
const d1 = new Data(1,1,2023) 
const d2 = new Data(1,2,2024) 

console.log(d1.dataFormatada())
console.log(d2.dataFormatada())
