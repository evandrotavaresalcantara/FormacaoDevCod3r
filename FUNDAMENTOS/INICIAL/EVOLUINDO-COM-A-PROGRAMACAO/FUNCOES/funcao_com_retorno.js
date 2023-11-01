function mediaPonderada(n1, n2, n3){
    const media = (n1 + 2 * n2 + 3 * n3) / 6
    return media
}

function mediaSimples(n1, n2){
    return ((n1 + n2) / 2)
}

const media1 = mediaPonderada(7,8,9)
const media2 = mediaPonderada(5.8, 8.3, 9.9)
const mediaFinal = mediaSimples(media1, media2)
const mediaFinalInt = Math.ceil(mediaFinal)

console.log(`A média final do Aluno: ${mediaFinal}`)
console.log(`A média final do Aluno: ${mediaFinalInt}`)
