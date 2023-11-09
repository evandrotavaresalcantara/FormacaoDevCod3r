
function mediaDeUmArray(numeros) {
    if (!Array.isArray(numeros)) return null

    let total = 0
    for (let numero of numeros) {
        total += numero
    }
    return total / numeros.length
}


function Aluno(nome, disciplinas){
    this.nome = nome
    this.disciplinas = disciplinas
    this.media = function (nomedisciplina) {
        for (let disciplina of this.disciplinas) {
            if (nomedisciplina === disciplina.nome) {
                return mediaDeUmArray(disciplina.notas)
            }
        }
        return null
    }
    this.mediaGlobal = function() {
        const medias = []

        for (let disciplina of this.disciplinas) {
            medias.push(mediaDeUmArray(disciplina.notas))
        }
        return mediaDeUmArray(medias)
    }
}


const aluno1 = new Aluno('Evandro', [
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
])

console.log(aluno1.media('Html'))
console.log(aluno1.media('Css'))
console.log(aluno1.media('JavaScript'))
console.log(aluno1.mediaGlobal())