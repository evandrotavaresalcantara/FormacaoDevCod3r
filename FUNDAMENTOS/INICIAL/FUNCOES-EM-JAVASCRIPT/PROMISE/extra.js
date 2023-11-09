

// setTimeOut é uma função assincrona 
// O runtime ristra cada setTimeout e vai execantando em paralelo 

setTimeout(function () {
    console.log('Executando a Callback...')
}, 2000)
setTimeout(() => {
    console.log('Executando a Callback Filho...')
}, 2000)
console.log('fim')