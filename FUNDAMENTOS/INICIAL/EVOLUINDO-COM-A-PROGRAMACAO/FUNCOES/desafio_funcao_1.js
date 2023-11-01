function mediaSimples(n1, n2, n3){

    const media = (n1 + n2 + n3) / 3
    console.log(`A média simples foi: ${media}`)
}

function mediaPonderada(n1, n2, n3){
    
    const media = (n1 + 2 * n2 + 3 * n3) / 6

    console.log(`A média ponderada foi: ${media}`)
}

mediaSimples(6,7,8)
mediaPonderada(6,7,8)