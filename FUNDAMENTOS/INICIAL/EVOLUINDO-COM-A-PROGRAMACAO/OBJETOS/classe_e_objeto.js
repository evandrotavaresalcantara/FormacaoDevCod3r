class DataA {

    ano = 1
    dia = 1
    mes = 1970

    formatar() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data1 = new DataA(28, 4, 1988) // Não tem efeito, porque a classe não tem construtor para receber os parâmetros
console.log(data1.formatar())

class DataB {
    dia = 1
    mes = 1
    ano = 1970
    
    constructor(dia, mes, ano){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

    formatar(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }

}

const data2 = new DataB(28,4,1988)
console.log(data2.formatar())