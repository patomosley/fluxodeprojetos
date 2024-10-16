// Dados para armazenar clientes e projetos
let clientes = [];

// Função para adicionar um cliente
function adicionarCliente() {
    const nomeCliente = document.getElementById('nomeCliente').value;
    if (nomeCliente) {
        clientes.push({ nome: nomeCliente, projetos: [] });
        atualizarListaClientes();
        document.getElementById('nomeCliente').value = ''; // Limpa o campo após adicionar
    }
}

// Função para atualizar a lista de clientes no select e na visualização
function atualizarListaClientes() {
    const clienteSelect = document.getElementById('clienteProjeto');
    const clientesEProjetosDiv = document.getElementById('clientesEProjetos');

    // Limpa a lista de clientes
    clienteSelect.innerHTML = '<option value="">Selecione um Cliente</option>';
    clientesEProjetosDiv.innerHTML = '';

    // Adiciona clientes ao select e exibe a lista de clientes e seus projetos
    clientes.forEach((cliente, index) => {
        let option = document.createElement('option');
        option.value = index;
        option.text = cliente.nome;
        clienteSelect.add(option);

        // Exibe clientes e projetos
        let clienteDiv = document.createElement('div');
        clienteDiv.innerHTML = `<h3>${cliente.nome}</h3><ul>${cliente.projetos.map(projeto => `<li>${projeto.nome} - Pontos: ${projeto.pontos}</li>`).join('')}</ul>`;
        clientesEProjetosDiv.appendChild(clienteDiv);
    });
}

// Função para adicionar um projeto ao cliente selecionado
function adicionarProjeto() {
    const clienteIndex = document.getElementById('clienteProjeto').value;
    const nomeProjeto = document.getElementById('nomeProjeto').value;
    const quantidadePontos = document.getElementById('quantidadePontos').value;

    if (clienteIndex !== '' && nomeProjeto && quantidadePontos) {
        clientes[clienteIndex].projetos.push({ nome: nomeProjeto, pontos: quantidadePontos });
        atualizarListaClientes();
        document.getElementById('nomeProjeto').value = ''; // Limpa o campo após adicionar
        document.getElementById('quantidadePontos').value = ''; // Limpa o campo após adicionar
    }
}
