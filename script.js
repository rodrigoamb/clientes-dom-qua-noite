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

//adicionando o objeto no array (criando um novo cliente)
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = inputNome.value;
  const sobrenome = inputSobrenome.value;
  const cpf = inputCpf.value;
  const email = inputEmail.value;

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

    const btnExcluir = document.createElement("button");
    btnExcluir.classList.add("excluir");
    btnExcluir.textContent = "Excluir";

    tdAcoes.appendChild(btnEditar);
    tdAcoes.appendChild(btnExcluir);

    tr.appendChild(tdAcoes);

    tabela.appendChild(tr);
  });
}
