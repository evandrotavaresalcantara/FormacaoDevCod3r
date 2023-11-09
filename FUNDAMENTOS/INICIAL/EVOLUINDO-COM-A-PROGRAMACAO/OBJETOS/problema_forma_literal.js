
const data1 = {
    dia: 28,
    mes: 4,
    ano: 1988,
    exibirDataFormatada: function(){
        return `${this.dia}/${this.mes}/${this.ano}` 
    }
}

const data2 = {
    dia: 29,
    mes: 5,
    ano: 1989,
    exibir: function(){
        return `${this.dia}/${this.mes}/${this.ano}` 
    }
}

console.log(data1.exibirDataFormatada())
console.log(data2.exibirDataFormatada())
