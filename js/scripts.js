console.log("1");
(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    //getElementById
    // var logo = document.getElementById('logo');
    // var navegacion = document.getElementById('navegacion');
    // navegacion.style.display = "none";

    //getElementByClassName
    // var navegacion = document.getElementsByClassName('navegacion');
    // console.log(navegacion[1])
    
    // var enlaces = document.getElementsByTagName('a');
    // console.log(enlaces);
    // for(var i = 0; i< enlaces.length; i++){
    //   enlaces[i].setAttribute('target', '_blank');
    // }
    // var enlacessidebar = document.getElementById('sidebar').getElementsByTagName('a');
    // for(var i = 0; i< enlacessidebar.length; i++){
    //   enlacessidebar[i].setAttribute('href', 'http://www.google.com');
    // }
    
    // var logo = document.querySelector('.logo');
    // console.log(logo);

    // var encabezados = document.querySelectorAll('h2, footer p');
    // console.log(encabezados);

    // var enlaces = document.querySelectorAll('a');
    // for (car i = 0; i < enlace.length; i++){
    //   console.log(enlaces);
    // }

    // var enlaces = document.querySelectorAll('#menu ul li a')[0];
    // console.log(enlaces.nodeType);
    // console.log(enlaces.nodeName);
    // console.log(enlaces.attributes);
    // console.log(enlaces.firstChild);
    // console.log(enlaces.firstChild.nodeValue);
    // enlaces.firstChild.nodeValue = "Home";
    // 

    // var sidebar = document.querySelector('#sidebar');
    // var nuevoElemento = document.createElement("H1");
    // var nuevoTexto = document.createTextNode("Hola Mundo");
    // nuevoElemento.appendChild(nuevoTexto);
    // sidebar.appendChild(nuevoElemento);

    // var enlacesSidebar = document.querySelectorAll('#sidebar ul');
    // var nuevoEnlace = document.createElement('A');
    // nuevoEnlace.setAttribute('href', 'http://www.google.com');
    // var textoEnlace = document.createTextNode('Entrada 6');
    // nuevoEnlace.appendChild(textoEnlace);
    // var nuevaLista = document.createElement('LI');
    // nuevaLista.appendChild(nuevoEnlace);
    // enlacesSidebar[0].appendChild(nuevaLista);

    // var contenido = document.querySelectorAll('main');
    // var nuevoContenido = contenido[0].cloneNode(true);
    // var sidebar = document.querySelector('aside');
    // sidebar.insertBefore(nuevoContenido, sidebar.childNodes[5]);

    // var sidebar = document.querySelector('aside');
    // var masVisitados = document.createElement('H2');
    // var textoVisitados = document.createTextNode('Post más visitados');
    // masVisitados.appendChild(textoVisitados);
    // sidebar.insertBefore(masVisitados, sidebar.childNodes[0]);

    // var contenido = document.querySelectorAll('main h2');
    // for (var i = 0; i < contenido.length; i++){
    //   var nuevoElemento = document.createElement('LI');
    //   var nuevoTexto = document.createTextNode(contenido[i].firstChild.nodeValue);
    //   nuevoElemento.appendChild(nuevoTexto);
    //   sidebar.insertBefore(nuevoElemento, sidebar.childNodes[1]);
    // }

    // var primerPost = document.querySelector('main article');
    // primerPost.parentNode.removeChild(primerPost);

    // var enlaces =document.querySelector('#navegacion nav ul li a');
    // console.log(enlaces);
    // enlaces.parentNode.removeChild(enlaces);

    // var viejoNodo = document.querySelector('main h2');
    // var nuevoNodo = document.querySelector('footer h2');
    // viejoNodo.parentNode.replaceChild(nuevoNodo,viejoNodo);

    var nuevoTitulo = document.createElement('H2');
    var nuevoTexto = document.createTextNode('Hola mundo');
    nuevoTitulo.appendChild(nuevoTexto);

    var viajeNodo = document.querySelector('main h2');
    viajeNodo.parentNode.replaceChild(nuevoTitulo,viajeNodo);

  });
})();
