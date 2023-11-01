
const hora = 10;
let saudacao;


if (hora <= 11) {
    saudacao = "Bom dia"
} else {
    if (hora <= 17)
        saudacao = "Boa tarde"
    else
        if (hora < 22)
            saudacao = "Boa noite"
        else
            saudacao = "Muito tarde"
}

console.log(saudacao);


/*

if (hora <= 12) {
    saudacao = "Bom dia"
} else if (hora <= 17) {
    saudacao = "Boa tarde"
}
else {
    saudacao = "Boa noite"
}
*/