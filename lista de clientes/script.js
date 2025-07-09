const API_URL="https://crudcrud.com/api/e2d665b381f6431b861606f068a4186e/clientes";

document.getElementById("cliente-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  const cliente = { nome, email };

  try {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cliente)
    });
  document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    listarClientes();
  } catch (err) {
    console.error("Erro ao cadastrar cliente:", err);
  }
});

async function listarClientes() {
  try {
    const resposta = await fetch(API_URL);
    const clientes = await resposta.json();

    const lista = document.getElementById("lista-clientes");
    lista.innerHTML = "";

    clientes.forEach(cliente => {
      const li = document.createElement("li");
      li.textContent = '${cliente.nome} - ${cliente.email}';
  
       const btn = document.createElement("button");
      btn.textContent = "Excluir";
      btn.onclick = () => excluirCliente(cliente._id);

      li.appendChild(btn);
      lista.appendChild(li);
    });
  } catch (err) {
    console.error("Erro ao listar clientes:", err);
  }
}

async function excluirCliente(id) {
  try {
    await fetch('${API_URL}/${id}', { method: "DELETE" });
    listarClientes();
  } catch (err) {
    console.error("Erro ao excluir cliente:", err);
  }
}

// Listar ao carregar a página
listaClientes();
if(clientes.leght ===0){
  lista.innerHTML="<li>nehum cliente cadastrado.</li>";
  return;
}
