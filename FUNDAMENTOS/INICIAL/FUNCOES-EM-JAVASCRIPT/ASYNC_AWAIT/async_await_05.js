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


async function obterBanco(codigo){
    const url = `https://brasilapi.com.br/api/banks/v1/${codigo}`

    const resposta = await fetch(url) // fetch vai retornar um promise
    const dados = await resposta.json() // json vai retornar uma promise

    return dados.name // Automaticamente é uma promisse porque a async está marcado na função
       
}

// Uma função async sempre vai retornar uma PROMISE


obterBanco(272)
    .then(nome => console.log(nome))


async function executar(){
  const nome = await obterBanco(272)
  console.log(nome)
}

executar()