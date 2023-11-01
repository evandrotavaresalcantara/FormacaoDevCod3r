// descartar menor nota e faz a média das duas notas maiores
// Aprovado -> >=7  // Recuperacao -> < 7 e >=4 // Reprovado => < 4

const nota1 = 8.9
const nota2 = 2.4
const nota3 = 6.5


function notasParaStatus(n1, n2, n3) {
    let media

    if (n1 <= n2 && n1 <= n3) {
        media = (n2 + n3) / 2
    } else if (n2 <= n1 & n2 <= n3)
        media = (n1 + n3) / 2
    else {
        media = (n1 + n2) / 3
    }

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