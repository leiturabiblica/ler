// script.js
window.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');
  
    // Criação do elemento <h1>
    var h1 = document.createElement('h1');
    h1.textContent = 'Mural Bíblico';
    header.appendChild(h1);
  
    // Criação do elemento <nav>
    var nav = document.createElement('nav');
    nav.id = 'menu';
    header.appendChild(nav);
  
    // Criação do elemento <ul>
    var ul = document.createElement('ul');
    nav.appendChild(ul);
  
    // Links do menu
    var links = [''];
    var urls = ['livros.html'];
  
    for (var i = 0; i < links.length; i++) {
  
    }
  
    // Criação do botão "Ler a Bíblia"
    var button = document.createElement('button');
    button.id = 'ler-biblia';
    button.textContent = 'Ler a Bíblia';
    header.appendChild(button);
  
    // Redirecionamento do botão "Ler a Bíblia"
    button.addEventListener('click', function () {
      window.location.href = '../index.html';
    });
  
    // Estilos do header
    header.style.backgroundColor = '#333';
    header.style.padding = '10px 10px';
    header.style.color = '#fff';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
  
    h1.style.margin = '0';
    h1.style.display = 'flex';
    
  
    nav.style.display = 'flex';
    nav.style.alignItems = 'center';
  
    ul.style.listStyle = 'none';
    ul.style.margin = '0';
    ul.style.padding = '0';
    ul.style.display = 'flex';
  
    var liElements = ul.querySelectorAll('li');
    liElements.forEach(function (li) {
      li.style.marginRight = '30px';
    });
  
    var aElements = ul.querySelectorAll('a');
    aElements.forEach(function (a) {
      a.style.color = '#fff';
      a.style.textDecoration = 'none';
    });
  
    button.style.backgroundColor = '#ff0000';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.padding = '8px 16px';
    button.style.borderRadius = '4px';
    button.style.cursor = 'pointer';

    var liElements = document.querySelectorAll('li');
    liElements.forEach(function (li) {
      var a = li.querySelector('a');
      a.addEventListener('mouseover', function () {
        this.style.borderBottom = '1px solid #ff0000';
      });

      a.addEventListener('mouseout', function () {
        this.style.border = 'none';
      });
    });
  });
  
