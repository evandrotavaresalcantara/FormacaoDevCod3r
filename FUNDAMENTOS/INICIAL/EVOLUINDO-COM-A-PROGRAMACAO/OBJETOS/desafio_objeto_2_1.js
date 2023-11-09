// Objeto Aluno
// Atribuitos: nome, disciplinas(nome, 3 notas)
// Método: media(nomedisciplina), mediaGlobal

const aluno1 = {
    nome: 'Evandro',
    disciplinas: [
        {
            nome: 'Html',
            notas: [6, 7, 10]
        },
        {
            nome: 'Css',
            notas: [6, 7, 10]
        },
        {
            nome: 'JavaScript',
            notas: [6, 7, 10]
        }
    ],
    media: function (nomedisciplina) {
        let mediaAluno = 0

        for (let disciplina of this.disciplinas) {
            if (nomedisciplina === disciplina.nome) {

                disciplina.notas.forEach(function (nota) {
                    mediaAluno += nota
                })
                return mediaAluno / disciplina.notas.length
            }
        }
        return null
    },
    mediaGlobal: function () {
        let notas = 0

        for (let disciplina of this.disciplinas){
            notas += this.media(disciplina.nome)
        }

        let mediaGlobal = notas / this.disciplinas.length
        return mediaGlobal

    }
}

disciplina = 'Html'
console.log(aluno1.media(disciplina))
console.log(aluno1.mediaGlobal())