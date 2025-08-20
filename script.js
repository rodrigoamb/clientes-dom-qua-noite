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

console.log(modalEditar);

//adicionando o objeto no array (criando um novo cliente)
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    !inputNome.value ||
    !inputSobrenome.value ||
    !inputCpf.value ||
    !inputEmail
  ) {
    return;
  }

  const nome = inputNome.value.trim();
  const sobrenome = inputSobrenome.value.trim();
  const cpf = inputCpf.value.trim();
  const email = inputEmail.value.trim();

  const objCliente = {
    nome,
    sobrenome,
    cpf,
    email,
  };

  clientes.push(objCliente);

  form.reset();

  renderizarTabela();
});

function renderizarTabela() {
  tabela.innerHTML = "";

  clientes.forEach((cliente, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td>${cliente.nome}</td>
    <td>${cliente.sobrenome}</td>
    <td>${cliente.cpf}</td>
    <td>${cliente.email}</td>
    `;

    const tdAcoes = document.createElement("td");
    tdAcoes.classList.add("acoes");

    const btnEditar = document.createElement("button");
    btnEditar.classList.add("editar");
    btnEditar.textContent = "Editar";
    btnEditar.onclick = () => abrirModalEditar(cliente, index);

    const btnExcluir = document.createElement("button");
    btnExcluir.classList.add("excluir");
    btnExcluir.textContent = "Excluir";
    btnExcluir.onclick = () => abrirModalExcluir(index);

    tdAcoes.appendChild(btnEditar);
    tdAcoes.appendChild(btnExcluir);

    tr.appendChild(tdAcoes);

    tabela.appendChild(tr);
  });
}

function abrirModalEditar(cliente, index) {
  modalEditar.style.display = "flex";

  inputEditNome.value = cliente.nome;
  inputEditSobrenome.value = cliente.sobrenome;
  inputEditCpf.value = cliente.cpf;
  inputEditEmail.value = cliente.email;

  indexEditando = index;
}

function fecharModalEditar() {
  indexEditando = null;
  modalEditar.style.display = "none";
}

btnCancelarEdicao.addEventListener("click", fecharModalEditar);

function abrirModalExcluir(index) {
  indexExcluindo = index;
  modalExcluir.style.display = "flex";
}

function fecharModalExcluir() {
  indexExcluindo = null;
  modalExcluir.style.display = "none";
}

btnCancelarExclusao.addEventListener("click", fecharModalExcluir);

function confirmarExclusao() {
  clientes.splice(indexExcluindo, 1);

  renderizarTabela();
  fecharModalExcluir();
}

btnConfirmarExclusao.addEventListener("click", confirmarExclusao);

formEdicao.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    !inputEditNome.value ||
    !inputEditSobrenome.value ||
    !inputEditCpf.value ||
    !inputEditEmail
  ) {
    return;
  }

  clientes[indexEditando] = {
    nome: inputEditNome.value,
    sobrenome: inputEditSobrenome.value,
    cpf: inputEditCpf.value,
    email: inputEditEmail.value,
  };

  renderizarTabela();
  fecharModalEditar();
});
