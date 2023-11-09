
const promessa1 = new Promise(function (resolve, reject){
    resolve('Promise1 resolvida com sucesso')
    reject('Promise falhou')
})

promessa1.then((valor) => console.log(valor))
console.log('Instrução seguinte')


const promessa2 = new Promise((resolve, reject) => {
    resolve('Promise2 resolvida com sucesso')
    reject('Promise falhou')
})

promessa2.then((valor) => console.log(valor))
console.log('Instrução seguinte')



// a ordem dos parâmetros que define o que resolvido e o que é rejeitado
// o nome resolve e reject é apenas um convenção de nome


// Promise(executor: (                  // Uma função que chama duas função
//    resolve: (value: any) => void,    // Chamada se resolver
//     reject: (reason?: any) => void)  // Chamada se não resolver
//     => void): Promise<any>           // Fim da Função que chama as duas funções