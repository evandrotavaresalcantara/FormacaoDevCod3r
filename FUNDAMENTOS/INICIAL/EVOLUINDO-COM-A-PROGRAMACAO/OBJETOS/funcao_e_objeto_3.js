// Não é classe

// Função construtora -> Criar Objetos

// 1. Incia com letra maiúscula
// 2. Chamar função com new  ex: new Data()
// 3. Uso do this para acrescentar atributos e metódos no objeto

function Data(dia, mes, ano){
    this.dia = dia
    this.mes = mes
    this.ano = ano

    this.formatarData = function (){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data1 = new Data(1,1,1970)
console.log(data1)
console.log(data1.formatarData())
