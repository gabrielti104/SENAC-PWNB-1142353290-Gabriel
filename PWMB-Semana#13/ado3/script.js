let clientes = [];

function buscarEndereco() {
    const cep = document.getElementById('cep').value;
    // Implementar a lógica para buscar o endereço a partir do CEP (pode ser feito com uma API de CEP)
    // Neste exemplo, apenas exibimos um texto fictício no campo de endereço
    document.getElementById('endereco').value = 'Rua Fictícia, Bairro Fictício';
}

function incluirCliente() {
    const nome = document.getElementById('nome').value;
    const cep = document.getElementById('cep').value;
    const endereco = document.getElementById('endereco').value;

    if (nome && cep && endereco) {
        clientes.push({ nome, cep, endereco });
        alert('Cliente incluído com sucesso!');
        limparCampos();
    } else {
        alert('Preencha todos os campos antes de incluir o cliente.');
    }
}

function listarClientes() {
    const listaClientes = document.getElementById('listaClientes');
    listaClientes.innerHTML = '';

    clientes.forEach(cliente => {
        const li = document.createElement('li');
        li.textContent = `Nome: ${cliente.nome}, CEP: ${cliente.cep}, Endereço: ${cliente.endereco}`;
        listaClientes.appendChild(li);
    });
}

function excluirCliente() {
    const cep = prompt('Digite o CEP do cliente a ser excluído:');
    const index = clientes.findIndex(cliente => cliente.cep === cep);

    if (index !== -1) {
        clientes.splice(index, 1);
        alert('Cliente excluído com sucesso!');
    } else {
        alert('Cliente não encontrado.');
    }
}

function limparTela() {
    clientes = [];
    limparCampos();
    document.getElementById('listaClientes').innerHTML = '';
    alert('Cadastro de clientes limpo!');
}

function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('endereco').value = '';
}
// O código JavaScript permanece o mesmo, exceto por algumas modificações nos métodos incluirCliente e limparCampos
function incluirCliente() {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const cep = document.getElementById('cep').value;
    const endereco = document.getElementById('endereco').value;
    const numero = document.getElementById('numero').value;
    const cidade = document.getElementById('cidade').value;
    const uf = document.getElementById('uf').value;
    const tipoCliente = document.getElementById('tipoCliente').value;

    if (nome && sobrenome && cep && endereco && numero && cidade && uf && tipoCliente) {
        clientes.push({ nome, sobrenome, cep, endereco, numero, cidade, uf, tipoCliente });
        alert('Cliente incluído com sucesso!');
        limparCampos();
    } else {
        alert('Preencha todos os campos antes de incluir o cliente.');
    }
    atualizarListaClientes();
    limparCampos();
}

function confirmarCadastro() {
    // Lógica para confirmar o cadastro (salvar os dados em um banco de dados, por exemplo)
    // Aqui, estamos apenas limpando a tela
    limparTela();
}

function atualizarListaClientes() {
    const listaClientes = document.getElementById('listaClientes');
    listaClientes.innerHTML = '';

    clientes.forEach(cliente => {
        const li = document.createElement('li');
        li.textContent = `Nome: ${cliente.nome} ${cliente.sobrenome}, CEP: ${cliente.cep}, Endereço: ${cliente.endereco}, Número: ${cliente.numero}, Cidade: ${cliente.cidade}, UF: ${cliente.uf}, Tipo: ${cliente.tipoCliente}`;
        listaClientes.appendChild(li);
    });
}


function atualizarListaClientes() {
    const listaClientes = document.getElementById('listaClientes');
    listaClientes.innerHTML = '';

    clientes.forEach(cliente => {
        const li = document.createElement('li');
        li.textContent = `Nome: ${cliente.nome} ${cliente.sobrenome}, CEP: ${cliente.cep}, Endereço: ${cliente.endereco}, Número: ${cliente.numero}, Cidade: ${cliente.cidade}, UF: ${cliente.uf}, Tipo: ${cliente.tipoCliente}`;
        listaClientes.appendChild(li);
    });
}

function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('endereco').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('tipoCliente').value = 'Normal';
}