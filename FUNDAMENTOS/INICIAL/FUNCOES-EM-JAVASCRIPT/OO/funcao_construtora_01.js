// Função construtora
function Data(dia, mes, ano){
    this.dia = dia // Atributos Públicos
    this.mes =  mes
    this.ano = ano
}

const d1 = new Data(1,1,2023) // Objeto ou instância
const d2 = new Data(1,2,2024) // Objeto ou instância

console.log(typeof d1, d1)
console.log(typeof d2, d2)

d1.dia = 25
d1.mes = 12
d1.ano = 2028

console.log(`${d1.dia}/${d1.mes}/${d1.ano}`)