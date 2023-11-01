let conceito = "C";

switch (conceito) {
    case "A+":
        console.log("Nota: 10");
        break;
    case "A":
        console.log("Nota: 9");
        break;
    case "B+":
        console.log("Nota: 8");
        break;
    case "B":
        console.log("Nota: 7");
        break;
    case "C+":
        console.log("Nota: 6");
        break;
    case "C":
        console.log("Nota: 5");
        break;
    case "D+":
        console.log("Nota: 4");
        break;
    case "D":
        console.log("Nota: 3");
        break;
    case "E+":
        console.log("Nota: 2");
        break;
    case "E":
        console.log("Nota: 1");
        break;
    case "F":
        console.log("Nota: 0");
        break;
    default:
        console.log("Nota Inválida");
}

let nota2;
const conceito2 = "A+"

switch(conceito2){
    case "A+": nota2 = 10; break
    case "A": nota2 = 9; break
    case "B+": nota2 = 8; break
    case "B": nota2 = 7; break
    case "C+": nota2 = 6; break
    case "C": nota2 = 5; break
    case "D+": nota2 = 4; break
    case "D": nota2 = 3; break
    case "E+": nota2 = 2; break
    case "E": nota2 = 1; break
    case "F+": nota2 = 0; break
    default: nota2 = -1

}

if(nota2 !== undefined){
    console.log("Nota: " + nota2 )
}else{
    console.log("Nota inválida!")
}