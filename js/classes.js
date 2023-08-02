class Versiculo {
    constructor(numero, texto, codigo) {
    this.numero = numero;
    this.texto = texto;
    this.codigo = codigo;
  }

  criarElemento() {
    // Criar elemento de container numerado
    const container = document.createElement('div');
    container.classList.add('versiculo-container');

    // Criar elemento de div para o número do versículo
    const divNumero = document.createElement('div');
    divNumero.classList.add('versiculo-div-numero');

    // Criar elemento de número do versículo
    const numeroVersiculo = document.createElement('span');
    numeroVersiculo.classList.add('versiculo-numero');
    numeroVersiculo.textContent = this.numero + '. ';

    // Criar elemento de div para o texto do versículo
    const divTexto = document.createElement('div');
    divTexto.classList.add('versiculo-div-texto');

    // Criar elemento de texto do versículo
    const textoVersiculo = document.createElement('span');
    textoVersiculo.classList.add('versiculo-texto');
    textoVersiculo.textContent = this.texto;

    // Criar elemento de código do versículo
    const codigoVersiculo = document.createElement('span');
    codigoVersiculo.classList.add('versiculo-codigo');
    codigoVersiculo.textContent = '(' + this.codigo + ')';

    // Criar elemento de div para o botão de compartilhamento
    const divBotaoCompartilhar = document.createElement('div');
    divBotaoCompartilhar.classList.add('versiculo-div-botao-compartilhar');
    divBotaoCompartilhar.addEventListener('click', this.shareOnWhatsApp.bind(this));

    // Criar elemento de botão de compartilhamento
    const botaoCompartilhar = document.createElement('button');
    botaoCompartilhar.classList.add('versiculo-botao-compartilhar');
    botaoCompartilhar.id = 'botao-compartilhar';

    // Adicionar evento de clique
    //botaoCompartilhar.addEventListener('click', this.getImage.bind(this));

    // Criar elemento de span para envolver o ícone de compartilhamento
    const spanIconeCompartilhar = document.createElement('span');
    spanIconeCompartilhar.classList.add('icone-compartilhar');

    // Criar elemento de imagem para o ícone de compartilhamento
    const imgIconeCompartilhar = document.createElement('img');
    imgIconeCompartilhar.src = 'svg/wpp.svg';
    imgIconeCompartilhar.alt = 'Compartilhar';

    // Adicionar imagem do ícone de compartilhamento ao span
    spanIconeCompartilhar.appendChild(imgIconeCompartilhar);

    // Adicionar span do ícone de compartilhamento ao botão
    botaoCompartilhar.appendChild(spanIconeCompartilhar);

    // Adicionar elementos às divs correspondentes
    divNumero.appendChild(numeroVersiculo);
    divTexto.appendChild(textoVersiculo);
    divTexto.appendChild(codigoVersiculo);
    divBotaoCompartilhar.appendChild(botaoCompartilhar);

    // Adicionar divs ao container
    container.appendChild(divNumero);
    container.appendChild(divTexto);
    container.appendChild(divBotaoCompartilhar);

    return container;
  }

  shareOnWhatsApp() {
    const shareText = '_' + this.texto + '_';
    const shareUrl = '*www.muralbiblico.com.br*';

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
    window.open(whatsappUrl, '_blank');
  }
}

class Versiculo2 {
  constructor(numero, texto, codigo) {
  this.numero = numero;
  this.texto = texto;
  this.codigo = codigo;
}

criarElemento() {
  // Criar elemento de container numerado
  const container = document.createElement('div');
  container.classList.add('versiculo-container');

  // Criar elemento de div para o número do versículo
  const divNumero = document.createElement('div');
  divNumero.classList.add('versiculo-div-numero');

  // Criar elemento de número do versículo
  const numeroVersiculo = document.createElement('span');
  numeroVersiculo.classList.add('versiculo-numero');
  numeroVersiculo.textContent = this.numero + '. ';

  // Criar elemento de div para o texto do versículo
  const divTexto = document.createElement('div');
  divTexto.classList.add('versiculo-div-texto');

  // Criar elemento de texto do versículo
  const textoVersiculo = document.createElement('span');
  textoVersiculo.classList.add('versiculo-texto');
  textoVersiculo.textContent = this.texto;

  // Criar elemento de código do versículo
  const codigoVersiculo = document.createElement('span');
  codigoVersiculo.classList.add('versiculo-codigo');
  codigoVersiculo.textContent = '(' + this.codigo + ')';

  // Criar elemento de div para o botão de compartilhamento
  const divBotaoCompartilhar = document.createElement('div');
  divBotaoCompartilhar.classList.add('versiculo-div-botao-compartilhar');
  divBotaoCompartilhar.addEventListener('click', this.shareOnWhatsApp.bind(this));

  // Criar elemento de botão de compartilhamento
  const botaoCompartilhar = document.createElement('button');
  botaoCompartilhar.classList.add('versiculo-botao-compartilhar');
  botaoCompartilhar.id = 'botao-compartilhar';

  // Adicionar evento de clique
  //botaoCompartilhar.addEventListener('click', this.getImage.bind(this));

  // Criar elemento de span para envolver o ícone de compartilhamento
  const spanIconeCompartilhar = document.createElement('span');
  spanIconeCompartilhar.classList.add('icone-compartilhar');

  // Criar elemento de imagem para o ícone de compartilhamento
  const imgIconeCompartilhar = document.createElement('img');
  imgIconeCompartilhar.src = '../svg/wpp.svg';
  imgIconeCompartilhar.alt = 'Compartilhar';

  // Adicionar imagem do ícone de compartilhamento ao span
  spanIconeCompartilhar.appendChild(imgIconeCompartilhar);

  // Adicionar span do ícone de compartilhamento ao botão
  botaoCompartilhar.appendChild(spanIconeCompartilhar);

  // Adicionar elementos às divs correspondentes
  divNumero.appendChild(numeroVersiculo);
  divTexto.appendChild(textoVersiculo);
  divTexto.appendChild(codigoVersiculo);
  divBotaoCompartilhar.appendChild(botaoCompartilhar);

  // Adicionar divs ao container
  container.appendChild(divNumero);
  container.appendChild(divTexto);
  container.appendChild(divBotaoCompartilhar);

  return container;
}

shareOnWhatsApp() {
  const shareText = '_' + this.texto + '_';
  const shareUrl = '*www.muralbiblico.com.br*';

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
  window.open(whatsappUrl, '_blank');
}
}
