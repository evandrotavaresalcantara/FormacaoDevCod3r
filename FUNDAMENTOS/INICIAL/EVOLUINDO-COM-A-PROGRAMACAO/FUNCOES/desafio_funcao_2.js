function processarNotaComArredondamento(nota) {
    let conceito = ''
    notaInteira = Math.ceil(nota)
    
    // case 10: return 'A+' // Uma possibilidade
    
    switch (notaInteira) {
        case 10: conceito = 'A+'; break
        case 9: conceito = 'A'; break
        case 8: conceito = 'B+'; break
        case 7: conceito = 'B'; break
        case 6: conceito = 'C+'; break
        case 5: conceito = 'C'; break
        case 4: conceito = 'D+'; break
        case 3: conceito = 'D'; break
        case 2: conceito = 'E+'; break
        case 1: conceito = 'E'; break
        case 0: conceito = 'F'; break
        default: conceito = null

    }
    return conceito
}



function processarNota(nota) {
    
    let conceito = ''
    //Essa abordagem apesar de funcionar ao alterar a ordem modifica a lógica
    //e também pode deixar o código confuso 
    
    if (nota < 1) conceito = 'F'
    else if (nota < 2) conceito = 'E'
    else if (nota < 3) conceito = 'E+'
    else if (nota < 4) conceito = 'D'
    else if (nota < 5) conceito = 'D+'
    else if (nota < 6) conceito = 'C'
    else if (nota < 7) conceito = 'C+'
    else if (nota < 8) conceito = 'B'
    else if (nota < 9) conceito = 'B+'
    else if (nota < 10) conceito = 'A'
    else if (nota == 10) conceito = 'A+'
    else conceito = null
    
    return conceito
}


const exibirNotaArredondada = processarNotaComArredondamento(9.4)
console.log(exibirNotaArredondada)

const exibirNota = processarNota(9.4)
console.log(exibirNota)