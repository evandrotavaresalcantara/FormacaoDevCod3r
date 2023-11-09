Array.prototype.meuFilter = function (fn) {
    if (typeof fn !== 'function') return []
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const maiorOuIgualA4 = numero => numero >= 7

console.log(numeros.filter(maiorOuIgualA4))
console.log(numeros.meuFilter(maiorOuIgualA4))