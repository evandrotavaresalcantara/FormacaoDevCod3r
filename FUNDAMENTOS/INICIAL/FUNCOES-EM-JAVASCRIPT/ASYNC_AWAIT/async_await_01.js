function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve()
        }, tempo)
    })
}

// Executa tudo em paralelo sem esperar 
// totalizando o maior tempo 3 segundos e não 6,5 segundos que 
// a soma de cada promise 

function executar(){
    esperarPor(2000)
    console.log('Depois de 2s')
    
    esperarPor(3000)
    console.log('Depois de 3s')

    esperarPor(1500)
    console.log('Depois de 1,5s')
}

executar()
console.log('fim')
    
   
