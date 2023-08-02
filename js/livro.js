$(document).ready(function() {
  const livrosAntigoTestamento = [
    'Gênesis',
    'Êxodo',
    'Levítico',
    'Números',
    'Deuteronômio',
    'Josué',
    'Juízes',
    'Rute',
    'Samuel I',
    'Samuel II',
    'Reis I',
    'Reis II',
    'Crônicas I',
    'Crônicas II',
    'Esdras',
    'Neemias',
    'Ester',
    'Jó',
    'Salmos',
    'Provérbios',
    'Eclesiastes',
    'Cânticos',
    'Isaías',
    'Jeremias',
    'Lamentações',
    'Ezequiel',
    'Daniel',
    'Oseias',
    'Joel',
    'Amós',
    'Obadias',
    'Jonas',
    'Miquéias',
    'Naum',
    'Habacuque',
    'Sofonias',
    'Ageu',
    'Zacarias',
    'Malaquias'
  ];

  const livrosNovoTestamento = [
    'Mateus',
    'Marcos',
    'Lucas',
    'João',
    'Atos',
    'Romanos',
    'Coríntios I',
    'Coríntios II',
    'Gálatas',
    'Efésios',
    'Filipenses',
    'Colossenses',
    'Tessalonicenses I',
    'Tessalonicenses II',
    'Timóteo I',
    'Timóteo II',
    'Tito',
    'Filemom',
    'Hebreus',
    'Tiago',
    'Pedro I',
    'Pedro II',
    'João I',
    'João II',
    'João III',
    'Judas',
    'Apocalipse'
  ];

  function obterIndiceDoLivroNaURL() {
    const lista = [
    'Gênesis',
    'Êxodo',
    'Levítico',
    'Números',
    'Deuteronômio',
    'Josué',
    'Juízes',
    'Rute',
    'Samuel I',
    'Samuel II',
    'Reis I',
    'Reis II',
    'Crônicas I',
    'Crônicas II',
    'Esdras',
    'Neemias',
    'Ester',
    'Jó',
    'Salmos',
    'Provérbios',
    'Eclesiastes',
    'Cânticos',
    'Isaías',
    'Jeremias',
    'Lamentações',
    'Ezequiel',
    'Daniel',
    'Oseias',
    'Joel',
    'Amós',
    'Obadias',
    'Jonas',
    'Miquéias',
    'Naum',
    'Habacuque',
    'Sofonias',
    'Ageu',
    'Zacarias',
    'Malaquias',
    'Mateus',
    'Marcos',
    'Lucas',
    'João',
    'Atos',
    'Romanos',
    'Coríntios I',
    'Coríntios II',
    'Gálatas',
    'Efésios',
    'Filipenses',
    'Colossenses',
    'Tessalonicenses I',
    'Tessalonicenses II',
    'Timóteo I',
    'Timóteo II',
    'Tito',
    'Filemom',
    'Hebreus',
    'Tiago',
    'Pedro I',
    'Pedro II',
    'João I',
    'João II',
    'João III',
    'Judas',
    'Apocalipse'
    ];
  
    const parametro = 'livro';
    const urlParams = new URLSearchParams(window.location.search);
    const livroParam = urlParams.get(parametro);
  
    if (livroParam) {
      const indice = lista.indexOf(livroParam);
      if (indice !== -1) {
        return indice;
      }
    }
  
    return -1; // Retorna -1 se o parâmetro não foi encontrado na URL ou não está na lista
  }
  
  let paginaAtual = obterIndiceDoLivroNaURL();
  const livrosPorPagina = 1;

  function carregarPagina(pagina) {
    
    const main = $('main');
    // Ocultar o elemento
    main.hide();

    const mainElement = $('section');
    mainElement.empty();

    const livroIndex = pagina * livrosPorPagina;

    if (livroIndex < livrosAntigoTestamento.length) {
      const livro = livrosAntigoTestamento[livroIndex];

      $.ajax({
        url: 'https://ilustrai-default-rtdb.firebaseio.com/' + livro + '.json',
        method: 'GET',
        success: function(response) {
          const capitulos = Object.keys(response);

          capitulos.sort((a, b) => {
            const capituloA = parseInt(a.replace('Capítulo-', ''));
            const capituloB = parseInt(b.replace('Capítulo-', ''));
            return capituloA - capituloB;
          });

          for (const capituloKey of capitulos) {
            const capituloObj = response[capituloKey];

            const livroTitulo = $('<h3>').text(livro);
            mainElement.append(livroTitulo);

            const capituloElement = $('<h2>').text(capituloKey.replace('Capítulo-', 'Capítulo '));
            mainElement.append(capituloElement);

            let versiculoCount = 1;

            for (const versiculoKey in capituloObj) {
              const versiculoObj = capituloObj[versiculoKey];
              const versiculo = new Versiculo2(versiculoCount, versiculoObj.Versículo, versiculoObj.Cód_max);
              const versiculoElement = versiculo.criarElemento();
              mainElement.append(versiculoElement);
              versiculoCount++;
            }
          }

      // Exibir o elemento após o processamento
      main.show();
    },
        error: function(error) {
          console.log('Erro ao carregar os dados do livro:', error);
        },
      });
    } else {
      const livro = livrosNovoTestamento[livroIndex - livrosAntigoTestamento.length];

      $.ajax({
        url: 'https://ilustrai-default-rtdb.firebaseio.com/' + livro + '.json',
        method: 'GET',
        success: function(response) {
          const capitulos = Object.keys(response);

          capitulos.sort((a, b) => {
            const capituloA = parseInt(a.replace('Capítulo-', ''));
            const capituloB = parseInt(b.replace('Capítulo-', ''));
            return capituloA - capituloB;
          });

          for (const capituloKey of capitulos) {
            const capituloObj = response[capituloKey];

            const livroTitulo = $('<h3>').text(livro);
            mainElement.append(livroTitulo);

            const capituloElement = $('<h2>').text(capituloKey.replace('Capítulo-', 'Capítulo '));
            mainElement.append(capituloElement);

            let versiculoCount = 1;

            for (const versiculoKey in capituloObj) {
              const versiculoObj = capituloObj[versiculoKey];
              const versiculo = new Versiculo2(versiculoCount, versiculoObj.Versículo, versiculoObj.Cód_max);
              const versiculoElement = versiculo.criarElemento();
              mainElement.append(versiculoElement);
              versiculoCount++;
            }
          }
      // Exibir o elemento após o processamento
      main.show();
    },
        error: function(error) {
          console.log('Erro ao carregar os dados do livro:', error);
        },
      });
    }

    const botaoVoltar = $('<button>').text('Voltar').addClass('botao-voltar');
    botaoVoltar.click(function() {
      if (paginaAtual > 0) {
        paginaAtual--;
        carregarPagina(paginaAtual);
      }
    });

    const botaoAvancar = $('<button>').text('Avançar').addClass('botao-avancar');;
    botaoAvancar.click(function() {
      const totalLivros = livrosAntigoTestamento.length + livrosNovoTestamento.length;
      const totalPaginas = Math.ceil(totalLivros / livrosPorPagina);
      if (paginaAtual < totalPaginas - 1) {
        paginaAtual++;
        carregarPagina(paginaAtual);
      }
    });

    const btnElement = $('div');
    btnElement.empty();
    btnElement.append(botaoVoltar);
    btnElement.append(botaoAvancar);
  }

  carregarPagina(paginaAtual);
  
});
  

  

