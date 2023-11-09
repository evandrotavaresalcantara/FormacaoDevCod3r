const primeroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

const promessa = new Promise((resolve) =>{

    resolve(['Evandro','Desenvolvedor de Software'])

})

promessa
.then(primeroElemento)
.then(primeroElemento)
.then(letraMinuscula)
.then(console.log)

console.log('fim')