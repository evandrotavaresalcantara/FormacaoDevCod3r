// Os dados podem ser inseridos através do construtor 
// ou serem definidos depois da criação da instância do objeto

class Data {
    constructor(dia, mes, ano){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
    
   
    dataFormatada (){   
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const d1 = new Data('texto',79,-2028)

console.log(d1.dataFormatada())

