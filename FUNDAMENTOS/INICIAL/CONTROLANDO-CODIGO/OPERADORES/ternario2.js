const x = 8;
const y = 7;

const operacao = '+';

const resultado = 
    operacao === '+' ? x + y : 
        operacao === '-'? x - y: 
            operacao === '/'? x / y: x * y

    console.log(resultado);

const operacao2 = '+';

const parcial1 = operacao === '*' ? x * y: x / y;
const parcial2 = operacao === '-' ? x - y: parcial1
const resultado2 = operacao === '+'? x + y : parcial2

console.log(resultado2);