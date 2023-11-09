

setTimeout(() => {
    console.log('Executando Callback....')
    setTimeout(() => {
        console.log('Executando CallBack Filha')
        setTimeout(() => {
            console.log('Executando CallBack Neta')
            setTimeout(() => {
                console.log('Executando CallBack Tataraneta')
            }, 2000)
        }, 2000)
    }, 2000)
}, 2000)

// Promise
function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Executando promise')
            resolve()
        }, tempo)
    })
}

// O the aguarda o finalização para chamar o próximo then
// mas o fluxo principal continua, é como se houvesse um fluxo
// sincrono dentro do código assíncrono

esperarPor()
.then(() => esperarPor())
.then(() => esperarPor())
.then(() => esperarPor())

console.log('fim')
console.log('fim')