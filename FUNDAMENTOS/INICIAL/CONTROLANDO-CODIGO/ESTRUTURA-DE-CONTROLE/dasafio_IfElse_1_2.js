//Segunda até Sexta => 8 horas
//Sábado => 4 horas
//Domingo => 0 horas

const diaDaSemana = "aa";
let cargaHoraria;

const dia1 = "domingo";
const dia2 = "segunda";
const dia3 = "terca";
const dia4 = "quarta";
const dia5 = "quinta";
const dia6 = "sexta";
const dia7 = "sabado";


if (diaDaSemana === dia1) {
    cargaHoraria = 0;
} else if (diaDaSemana === dia7) {
    cargaHoraria = 4;
} else {
    cargaHoraria = 8;
}

console.log(
    diaDaSemana === dia1 ?
        "Hoje é " + diaDaSemana + ", você está de Folga!"
        :
        "Hoje é " + diaDaSemana + ", a carga horária  : " + cargaHoraria + " horas");




