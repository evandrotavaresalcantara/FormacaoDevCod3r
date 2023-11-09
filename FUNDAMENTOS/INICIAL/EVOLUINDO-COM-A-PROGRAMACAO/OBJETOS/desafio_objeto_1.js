
const data = {
    dia: 28,
    mes: 4,
    ano: 1988,
    exibirDataFormatada: function(){
        console.log(`${data.dia}/${data.mes}/${data.ano}`) // Acessa externamente a constante para depois acessar o atribuito 
        return `${this.dia}/${this.mes}/${this.ano}` // Forma correta de acessa o atribuito do objeto
    }
}

console.log(data.exibirDataFormatada())



