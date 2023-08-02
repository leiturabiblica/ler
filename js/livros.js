// script.js
class LivroContainer {
  constructor(nomeLivro, qtdCapitulos) {
    this.nomeLivro = nomeLivro;
    this.qtdCapitulos = qtdCapitulos;
    this.container = this.criarContainer();
  }

  criarContainer() {
    var container = document.createElement('div');
    container.classList.add('livro-container');

    var nomeLivroElement = document.createElement('h3');
    nomeLivroElement.textContent = this.nomeLivro;
    container.appendChild(nomeLivroElement);

    var qtdCapitulosElement = document.createElement('p');
    qtdCapitulosElement.textContent = `${this.qtdCapitulos} capítulos`;
    qtdCapitulosElement.classList.add('discreto');
    container.appendChild(qtdCapitulosElement);

    container.addEventListener('click', () => {
      window.location.href = `livro.html?livro=${encodeURIComponent(this.nomeLivro)}`;
    });

    return container;
  }
}

window.addEventListener('DOMContentLoaded', function () {
  var livrosAntigo = document.getElementById('livros-antigo');
  var livrosNovo = document.getElementById('livros-novo');

  var livrosAntigoTestamento = {
    'Gênesis': 50,
    'Êxodo': 40,
    'Levítico': 27,
    'Números': 36,
    'Deuteronômio': 34,
    'Josué': 24,
    'Juízes': 21,
    'Rute': 4,
    'Samuel I': 31,
    'Samuel II': 24,
    'Reis I': 22,
    'Reis II': 25,
    'Crônicas I': 29,
    'Crônicas II': 36,
    'Esdras': 10,
    'Neemias': 13,
    'Ester': 10,
    'Jó': 42,
    'Salmos': 150,
    'Provérbios': 31,
    'Eclesiastes': 12,
    'Isaías': 66,
    'Jeremias': 52,
    'Ezequiel': 48,
    'Daniel': 12,
    'Oséias': 14,
    'Joel': 3,
    'Amós': 9,
    'Obadias': 1,
    'Jonas': 4,
    'Naum': 3,
    'Habacuque': 3,
    'Sofonias': 3,
    'Ageu': 2,
    'Zacarias': 14,
    'Malaquias': 4
  };

  var livrosNovoTestamento = {
    'Mateus': 28,
    'Marcos': 16,
    'Lucas': 24,
    'João': 21,
    'Romanos': 16,
    'Coríntios I': 16,
    'Coríntios II': 13,
    'Gálatas': 6,
    'Efésios': 6,
    'Filipenses': 4,
    'Colossenses': 4,
    'Tessalonicenses I': 5,
    'Tessalonicenses II': 3,
    'Timóteo I': 6,
    'Timóteo II': 4,
    'Tito': 3,
    'Filemom': 1,
    'Hebreus': 13,
    'Tiago': 5,
    'Pedro I': 5,
    'Pedro II': 3,
    'João I': 5,
    'João II': 1,
    'João III': 1,
    'Judas': 1,
    'Apocalipse': 22
  };

  function adicionarLivroAntigo(livro, qtdCapitulos) {
    var livroContainer = new LivroContainer(livro, qtdCapitulos);
    livrosAntigo.appendChild(livroContainer.container);
  }

  function adicionarLivroNovo(livro, qtdCapitulos) {
    var livroContainer = new LivroContainer(livro, qtdCapitulos);
    livrosNovo.appendChild(livroContainer.container);
  }

  // Loop pelos livros do Antigo Testamento
  Object.entries(livrosAntigoTestamento).forEach(([livro, qtdCapitulos]) => {
    adicionarLivroAntigo(livro, qtdCapitulos);
  });

  // Loop pelos livros do Novo Testamento
  Object.entries(livrosNovoTestamento).forEach(([livro, qtdCapitulos]) => {
    adicionarLivroNovo(livro, qtdCapitulos);
  });
});

