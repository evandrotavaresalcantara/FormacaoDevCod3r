class Data {
    #dia = 1
    #mes = 1
    #ano = 1970

    obterDia(){
        return this.#dia
    }

     // Getters / Setter
    setDia(novoDia) {
       if (novoDia >= 1 && novoDia <= 31)
        this.#dia = novoDia
    }

    getDia(){
        return `${this.#dia}/${this.#mes}/${this.#ano}`
    }
}

const d1 = new Data()
 d1.dia =  'texto'  // Isso gera um novo atributo que é diferente de #dia 
d1.setDia(30)
console.log(d1.getDia())
console.log(d1.obterDia())

