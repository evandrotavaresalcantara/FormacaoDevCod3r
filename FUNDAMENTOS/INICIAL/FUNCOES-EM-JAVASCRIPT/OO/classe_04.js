class Data {
    #dia = 1
    #mes = 1
    #ano = 1970

    get dia(){
        return this.#dia
    }

    set dia(novoDia) {
       if (novoDia >= 1 && novoDia <= 31)
        this.#dia = novoDia
    }

    dataFormatada(){
        return `${this.#dia}/${this.#mes}/${this.#ano}`
    }
}

const d1 = new Data(1,1,1970)
d1.dia = 30
console.log(d1)
console.log(d1.dia)




