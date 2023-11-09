
const url = 'https://brasilapi.com.br/api/banks/v1'

fetch(url)
    .then(resposta => resposta.json())
    .then(resposta => console.log(resposta))

console.log('fim')