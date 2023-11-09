// Objeto Aluno
// Atribuitos: nome, disciplinas(nome, 3 notas)
// Método: media(nomedisciplina), mediaGlobal


function mediaDeUmArray(numeros) {
    if (!Array.isArray(numeros)) return null

    let total = 0
    for (let numero of numeros) {
        total += numero
    }
    return total / numeros.length
}



const aluno1 = {
    nome: 'Evandro',
    disciplinas: [
        {
            nome: 'Html',
            notas: [6, 7, 8]
        },
        {
            nome: 'Css',
            notas: [6, 7, 8]
        },
        {
            nome: 'JavaScript',
            notas: [6, 7, 8]
        }
    ],
    media: function (nomedisciplina) {
        for (let disciplina of this.disciplinas) {
            if (nomedisciplina === disciplina.nome) {
                return mediaDeUmArray(disciplina.notas)
            }
        }
        return null
    },
    mediaGlobal() {
        const medias = []

        for (let disciplina of this.disciplinas) {
            medias.push(mediaDeUmArray(disciplina.notas))
        }
        return mediaDeUmArray(medias)
    }
}

disciplina = 'Html'
console.log(aluno1.media(disciplina))
console.log(aluno1.mediaGlobal())