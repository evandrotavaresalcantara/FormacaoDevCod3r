// https://www.mockaroo.com/

const alunos = [
    { nome: 'João', n1: 7, n2: 8, n3: 9 },
    { nome: 'Paula', n1: 9, n2: 8, n3: 10 },
    { nome: 'Evandro', n1: 5, n2: 6, n3: 7 },
]

const mediaAluno = (aluno, _, alunos) => {
    let valorMedia = (aluno.n1 + aluno.n2 + aluno.n3) / alunos.length
    return {nome: aluno.nome, media: valorMedia}
}

const resultadoFinal = alunos.map(mediaAluno)
console.log(resultadoFinal)

