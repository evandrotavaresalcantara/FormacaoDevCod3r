function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve()
        }, tempo)
    })
}

// Quando trabalha com promise a execução do código não é sequencial
// e sim no futuro

// Executa de forma sequencial por causa do .then
function executar(){
    esperarPor(2000)
    .then(() => console.log('Depois de 2s'))
    .then(() => esperarPor(3000))
    .then(() => console.log('Depois de 3s'))
    .then(() => esperarPor(1500))
    .then(() => console.log('Depois de 1,5s'))
}

executar()
console.log('fim')
    
   
