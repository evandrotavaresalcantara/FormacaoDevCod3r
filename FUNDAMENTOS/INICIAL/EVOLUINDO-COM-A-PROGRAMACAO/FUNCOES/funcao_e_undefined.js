function comRetorno(){
    return 'Bom dia! com retorno'
}
function semRetorno(){
    console.log('Bom dia! sem retorno')
}

const saudacao1 = comRetorno()
const saudacao2 = semRetorno()

console.log(saudacao1, saudacao2)
