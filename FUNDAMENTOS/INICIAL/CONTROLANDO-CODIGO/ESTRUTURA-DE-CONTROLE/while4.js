// Quantidade Milisegundos desde de 1 Janeiro de 1970
let quantidade = 0;
const datNoFuturo = Date.now() + 3000;

while(Date.now() < datNoFuturo){
    quantidade++
}
console.log("Quantidade: ", quantidade)