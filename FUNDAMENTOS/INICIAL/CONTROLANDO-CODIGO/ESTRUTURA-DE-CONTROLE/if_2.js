const nota = 8;
const bomComportamento = true;



if (nota >= 7 && bomComportamento)
    console.log("Aluno está de parabéns!!!");

if (nota < 7 || !bomComportamento)
    console.log("Aluno precisa melhorar!!")

console.log("fim");


/*
possibilidade para ter clareza no código

const parabens = nota >= 7 && bomComportamento

if (parabens)
    console.log("Aluno está de parabéns!!!");

*/