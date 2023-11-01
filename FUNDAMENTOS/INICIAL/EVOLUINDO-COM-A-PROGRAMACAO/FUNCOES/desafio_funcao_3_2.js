const nota1 = 0.9
const nota2 = 2.4
const nota3 = 8.5


function mediaNotas(n1, n2, n3){

    if (n1 <= n2 && n1 <= n3) {
        return (n2 + n3) / 2
    } else if (n2 <= n1 & n2 <= n3)
        return (n1 + n3) / 2
    else {
        return (n1 + n2) / 3
    }
}

function notasParaStatus(n1, n2, n3) {
   
    const media = mediaNotas(n1, n2, n3)

    if (media >= 7) {
        return 'Aprovado'
    } else if (media >= 4) {
        return 'Recuperacao'
    } else {
        return 'Reprovado'
    }
}

const statusNota = notasParaStatus(nota1, nota2, nota3)
console.log(statusNota)