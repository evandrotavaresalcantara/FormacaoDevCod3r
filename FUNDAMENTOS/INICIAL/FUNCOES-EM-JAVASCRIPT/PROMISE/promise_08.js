function gerarNumeroEntre(min, max, tempo) {
    return new Promise(resolve => {
        setTimeout(() =>{
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        },tempo)
    })
}

console.time('sequencial')

gerarNumeroEntre(0,60,1000)
    .then(console.log)
    .then(() => gerarNumeroEntre(1,60, 1000))
    .then(console.log)
    .then(() => gerarNumeroEntre(1,60, 1000))
    .then(console.log)
    .then(() => gerarNumeroEntre(1,60, 1000))
    .then(console.log)
    .then(() => gerarNumeroEntre(1,60, 1000))
    .then(console.log)
    .then(() => gerarNumeroEntre(1,60, 1000))
    .then(console.log)
    .then(() => console.timeEnd('sequencial'))
