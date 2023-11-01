const nota = 100;
let conceito = nota;

if ((nota >= 9) && (nota <= 10))
    console.log("A");

if ((nota >= 7) && (nota <= 8.9))
    console.log("B");

if ((nota >= 5) && (nota <= 6.9))
    console.log("C");

if ((nota >= 4.5) && (nota <= 4.9))
    console.log("D");

if (nota < 4.5)
    console.log("F");

console.log();


if (conceito >= 9 && conceito <= 10)
    conceito = "A"

if (conceito >= 7 && conceito < 9)
    conceito = "B"

if (conceito >= 5 && conceito < 7)
    conceito = "C"

if (conceito >= 4.5 && conceito <= 5)
    conceito = "D"

if (conceito < 4.5)
    conceito = "F"

    console.log(conceito);