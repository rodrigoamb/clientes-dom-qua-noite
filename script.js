const form = document.querySelector("#form-cliente");
const tabela = document.querySelector("#tabela-clientes");
const modalEditar = document.querySelector("#modal-editar");
const modalExcluir = document.querySelector("#modal-excluir");

const inputNome = document.querySelector("#nome");
const inputSobrenome = document.querySelector("#sobrenome");
const inputCpf = document.querySelector("#cpf");
const inputEmail = document.querySelector("#email");

const inputEditNome = document.querySelector("#edit-nome");
const inputEditSobrenome = document.querySelector("#edit-sobrenome");
const inputEditCpf = document.querySelector("#edit-cpf");
const inputEditEmail = document.querySelector("#edit-email");

const formEdicao = document.querySelector("#form-edicao");
const btnCancelarEdicao = document.querySelector("#cancelar-edicao");
const btnConfirmarExclusao = document.querySelector("#confirmar-exclusao");
const btnCancelarExclusao = document.querySelector("#cancelar-exclusao");

let clientes = [];
let indexEditando = null;
let indexExcluindo = null;
