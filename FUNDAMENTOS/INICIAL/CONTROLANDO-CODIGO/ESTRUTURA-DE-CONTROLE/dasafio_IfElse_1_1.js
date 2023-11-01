//Segunda até Sexta => 8 horas
//Sábado => 4 horas
//Domingo => 0 horas

let cargaHoraria;



const DOMINGO = "domingo";
const SEGUNDA = "segunda";
const TERCA = "terca";
const QUARTA = "quarta";
const QUINTA = "quinta";
const SEXTA = "sexta";
const SABADO = "sabado";

const diaDaSemana = SABADO;

const eDiaUtil = diaDaSemana === SEGUNDA
    || diaDaSemana === TERCA
    || diaDaSemana === QUARTA
    || diaDaSemana === QUINTA
    || diaDaSemana === SEXTA


if (eDiaUtil) {
    cargaHoraria = 8;
} else if (diaDaSemana === SABADO) {
    cargaHoraria = 4;
} else {
    cargaHoraria = 0;
}

console.log("Carga horária é: " + cargaHoraria + "h");
  




