
const totalAulas = 223;
const faltas = 18;

const nota1 = 5.8;
const nota2 = 8.1;
const nota3 = 6.9;

const quantidaAvaliacoes = 3;

const mediaNotaAluno = Math.round((nota1 + nota2 + nota3) / quantidaAvaliacoes);
const frequenciaAluno = Math.round((1 - (faltas / totalAulas)) * 100);
const resultado = (mediaNotaAluno >= 7) && (frequenciaAluno >= 80)

console.log("A média do aluno: " + mediaNotaAluno + 
            ", Frquência: " + frequenciaAluno + "%" +
            ", Resultado: " + resultado);;

