const nota1 = 1
const nota2 = 2.4
const nota3 = 0.5


function menorValor(valor1, valor2){
    return valor1 <= valor2 ? valor1 : valor2
}

function media(n1, n2, n3){
    const menorNota = menorValor(n1, menorValor(n2, n2))

    if (menorNota === n1) {
        return (n2 + n3) / 2
    } else if (menorNota == n2)
        return (n1 + n3) / 2
    else {
        return (n1 + n2) / 2
    }
}

function mediaParaStatus(media) {
    if (media >= 7) {
        return 'Aprovado'
    } else if (media >= 4) {
        return 'Recuperacao'
    } else {
        return 'Reprovado'
    }
}

function notasParaStatus(n1, n2, n3) {
    let mediaFinal = media(n1, n2, n3)
    return mediaParaStatus(mediaFinal)
}

console.log(notasParaStatus(nota1, nota2, nota3))