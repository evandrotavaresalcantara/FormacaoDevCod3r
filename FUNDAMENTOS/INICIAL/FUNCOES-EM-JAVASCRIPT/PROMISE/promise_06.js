function promessaComPossivelErr(chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro')
        } else {
            resolve('Tarefa concluída com sucesso')
        }
    })
}

promessaComPossivelErr(0.5)
    .then(v => v + '!!!')
    .then(v => console.log(v))
    .catch(erro => console.log(erro))
    .finally(() => console.log('Fim'))