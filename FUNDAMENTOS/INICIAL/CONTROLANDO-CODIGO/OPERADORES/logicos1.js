let comprarTv50;
let comprarTv40;
let comprarSorvete;
let ficarEmCasa;

let tarefa1 = true;
let tarefa2 = true;

comprarTv50 = tarefa1 && tarefa2;
comprarTv40 = tarefa1 != tarefa2;
comprarSorvete = tarefa1 || tarefa2;
ficarEmCasa = !tarefa1 && !tarefa2; // ou  ficarEmCasa = !comprarSorvete;

console.log("Tarefa1: " + tarefa1 + ", Tarefa2: " + tarefa2);
console.log("\nCompra Tv50: " + comprarTv50 + "\nCompra Tv40: " + comprarTv40 + 
            "\nCompra Sorvete: " + comprarSorvete + "\nFica em Casa:  " + ficarEmCasa);
