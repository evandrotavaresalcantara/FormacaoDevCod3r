const cliente = {
    codigo: 5787,
    nome: 'Evandro Tavares',
    vip: true,
    endereco: {
        logradouro: 'Rua abc',
        numero: 888,
        complemento: 'Casa Confortável',
        pontosRef: ['Praia', 'Veneza Walter Park']
    },
    filhos: [
        { nome: 'Heloisa Tavares', anoDeNascimento: 2014 },
        { nome: 'Lara Tavares', anoDeNascimento: 2000 },
        { nome: 'Rock Tavares', anoDeNascimento: 2010 },
    ]
}

cliente.status = 'Aprovado'

console.log(cliente.nome)
console.log(cliente['endereco']['logradouro'])
console.log(cliente.filhos[2].nome);

console.log(cliente)