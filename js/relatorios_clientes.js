// Carregar clientes e mostrar na tabela
function listarClientes() {
  const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
  const tabela = document.getElementById("tabelaPipas");
  tabela.innerHTML = "";

  clientes.forEach((cliente, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${i + 1}</td>
      <td>${cliente.nome}</td>
      <td>${cliente.telefone}</td>
      <td>${cliente.email || "-"}</td>
      <td>
        <button class="btncp" onclick="excluirCliente(${i})">Excluir</button>
      </td>
    `;
    tabela.appendChild(row);
  });
}

// Excluir cliente
function excluirCliente(index) {
  if (confirm("Tem certeza que deseja excluir este cliente?")) {
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    clientes.splice(index, 1);
    localStorage.setItem("clientes", JSON.stringify(clientes));
    listarClientes();
  }
}

// Carrega automaticamente ao abrir a página
window.onload = listarClientes;
