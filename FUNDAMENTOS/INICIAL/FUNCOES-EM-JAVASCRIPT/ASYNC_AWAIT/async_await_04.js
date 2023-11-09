/*
//
[
{
    ispb: '00250699',
    name: 'AGK CC S.A.',
    code: 272,
    fullName: 'AGK CORRETORA DE CAMBIO S.A.'
  },

  https://brasilapi.com.br/api/banks/v1/{code}
]
*/


function obterBanco(codigo){
    const url = `https://brasilapi.com.br/api/banks/v1/${codigo}`

    return fetch(url)
        .then(resposta => resposta.json())
        .then(dados => dados.fullName )
    
}

obterBanco(272)
    .then(nome => console.log(nome))