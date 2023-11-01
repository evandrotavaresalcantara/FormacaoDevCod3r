const emBlackFriday = false;
const temEstoque = true;
const temPerfilFuncionario = true;

// boa pratica para obter clareza e consistência, utilizar entre parenteses
// quando houver mais de um operador lógico.
const permiteDescontoMaximo = (emBlackFriday && temEstoque) || temPerfilFuncionario;

console.log("Permitir desconto máximo?", permiteDescontoMaximo);

