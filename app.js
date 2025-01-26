let amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
  // Captura o valor do campo de entrada
  const inputNome = document.getElementById('amigo');
  const nome = inputNome.value.trim();

  // Validação para garantir que o campo não está vazio
  if (nome === '') {
    alert('Por favor, insira um nome.');
    return;
  }

  // Verifica se o nome já está na lista para evitar duplicados
  if (amigos.includes(nome)) {
    alert('Este nome já foi adicionado!');
    return;
  }

  // Adiciona o nome ao array de amigos
  amigos.push(nome);

  // Limpa o campo de entrada
  inputNome.value = '';

  // Atualiza a lista de amigos na tela
  atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';

  // Exibe os nomes dos amigos na lista
  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');

  // Limpar a lista existente para evitar duplicados
  listaAmigos.innerHTML = '';

  // Percorrer o array 'amigos' e criar um <li> para cada nome
  for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i];

    // Criar um elemento <li> para cada amigo
    const li = document.createElement('li');
    li.textContent = amigo; // Definir o texto do <li> com o nome do amigo

    // Adicionar o <li> à lista (ul)
    listaAmigos.appendChild(li);
  }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
  // Validar se há amigos disponíveis no array
  if (amigos.length === 0) {
    alert('Adicione pelo menos um amigo para realizar o sorteio.');
    return;
  }

  // Gerar um índice aleatório entre 0 e o tamanho do array (amigos.length - 1)
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obter o nome sorteado usando o índice aleatório
  const amigoSorteado = amigos[indiceAleatorio];

  // Exibir o resultado do sorteio
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`;
}
