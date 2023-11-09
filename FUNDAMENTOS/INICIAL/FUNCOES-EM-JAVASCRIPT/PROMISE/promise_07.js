function promessaComPossivelErro(chanceErro) {
    return new Promise((resolve, reject) => {
        try {

            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro')
            } else {
                resolve('Tarefa concluída com sucesso')
            }
        } catch (error) {
            reject(error)
        }

    })
}

promessaComPossivelErro(0.5)
    .then(
        v => v + '!!!',
        erro =>  console.log(`#1: ${erro}`)
    )
    .then(
        v => console.log(v),
        erro => console.log(`#2: ${erro}`)
    )
