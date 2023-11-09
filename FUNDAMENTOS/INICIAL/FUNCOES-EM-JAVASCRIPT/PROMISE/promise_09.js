function gerarNumeroEntre(min, max, tempo) {
    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

console.time('paralelo')
Promise.all([
    gerarNumeroEntre(0, 60, 1000),
    gerarNumeroEntre(1, 60, 1000),
    gerarNumeroEntre(1, 60, 1000),
    gerarNumeroEntre(1, 60, 1000),
    gerarNumeroEntre(1, 60, 1000),
    gerarNumeroEntre(1, 60, 1000),

])
.then(valor => console.log(valor))
.then(() => console.timeEnd('paralelo'))
