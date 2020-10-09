$(function(){
  'use strict';
  $('.nuestros-servicios div:first').show();
  $('.servicios nav a:first').addClass('activo');

  $('.servicios nav a'). on('click', mostrarTabs);

  function mostrarTabs(){
    $('.servicios nav a').removeClass('activo');
    $(this).addClass('activo');
    var enlace = $(this).attr('href');
    $('.nuestros-servicios div').hide();
    $(enlace).show();

    return false;
  }

/* var proximosViajes = ['Londres', 'Valencia', 'Madrid', 'Paris', 'Milan'];
  $.each(proximosViajes, function(i, v){ //i= indice, v=valor
    if(i == 0){
      $('aside').append('<h2>Próximos viajes</h2>')
    }
    $('aside').append('<li>' + v + '</li>');
  })
  var viajesPorFecha = {
    primero:'Londres',
    segundo:'Valencia',
    tercero:'Madrid',
    cuarto:'Paris',
    quinto:'Milan'

  };
  $.each(viajesPorFecha, function(i,v){
    $('aside').append('<li>' + i + '-' + v + '</li>')
  });
  
  $('div.logo img').on('click', cargarAjax);

function cargarAjax(){
  $.ajax('promociones.txt', {
    success: agregarContenido,
    type:'GET',
    datatype:'text'
  });
}
function agregarContenido(data, status, jqxhr){
  $('aside').text(data);
  console.log(status)
}

  $('.logo img').click(function(){
    $('main article:first').slideUp(1000); //1000=1seg
  });
  $('aside').click(function(){
    $('main article:first').slideDown(1000); //1000=1seg
  });
  $('.logo img').on('click', function(){
    $(this).animate({'width':'200px'}, 1000);
  });

  $('main article img').on('mouseenter', aumentarimagen);
  $('main article img').on('mouseleave',disminuirimagen);

  function aumentarimagen(){
    $(this).animate({'width':'100%'});
  }
  function disminuirimagen(){
    $(this).animate({'width':'350px'});
  }

  $('.logo img').css({'width':'400px'});

  $('main article h2').css({'color':'#db008d'})

  $('aside').css({'background-color':'#e1e1e1',
                  'text-transform': 'uppercase',
                'padding': '2px'})

  $('.navegacion ul li a').on('mouseenter', cambiarColor);
  function cambiarColor(){
    $('.navegacion').css({'background-color': 'red'});
  }

  $('main article:first img').on('click',function(){
    $(this).attr('src','img/imagen_2.jpg');
  });

  $('main').on({
    click: function(){
      $(this).addClass('fondorojo activo');
    }, mouseenter: function(){
      $(this).addClass('fondorojo');
    }, mouseleave: function(){
      $(this).addClass('activo');
    }
  })

  $('div.logo img').addClass('activo');
  $('.navegacion').show();
  // $('.navegacion nav ul li:first').addClass('activo');

  $('.navegacion ul li a').on('click',function(e){
    $('.navegacion ul li a').removeClass('activo');
    e.preventDefault();
    $(this).addClass('activo');
  })

  $('#menu').on('click',function(){
    $('#navegacion').show();
  });
  
  $('div.logo img').on('mouseenter', function(){
    console.log("Sobre el logo")
  });
  $('div.logo img').on('mouseleave', function(){
    console.log("Fuera del logo")
  });

  $('div.logo img').on('click', function(){
    $(this).remove();
  })

  $ ('main article:first').remove();

  var copia =  $('main article:last').clone();
  $('main').prepend(copia);
  var copia =  $('main article:last').clone();
  $(copia).prependTo('main');
  $('div.logo img').on('click', function(){
    console.log("Has hecho click en el logo")
  })*/
});