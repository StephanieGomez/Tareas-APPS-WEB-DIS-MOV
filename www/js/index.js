$('#formulario').submit(function() { 
    
     
    // recolecta los valores que inserto el usuario
    var datosNombre = $("#name").val();
    var datosEmail = $("#mail").val();
    var datosUsuario = $("#username1").val();
    var datosPassword = $("#pass").val();
    
    archivoInsertar = "http://phonegapitechii.hoxty.com/php/insertar_datos.php?jsoncallback=?";
    $.getJSON( archivoInsertar, { nombre:datosNombre ,email:datosEmail ,usuario:datosUsuario ,password:datosPassword})
    .done(function(respuestaServer) {
        
        alert(respuestaServer.mensaje + "\nGenerado en: " + respuestaServer.hora + "\n" +respuestaServer.generador)
        
        if(respuestaServer.validacion == "ok"){          
            /// si la validacion es correcta, muestra la pantalla "login" y borramos los datos del formulario
          $('#formulario').trigger("reset");           
          $.mobile.changePage("#login");
          
        }else{          
          /// ejecutar una conducta cuando la validacion falla
          $.mobile.changePage("#error");
        }
  
    })
    return false;
});

$('#formulario1').submit(function() { 
    
     
    // recolecta los valores que inserto el usuario
    var datosUsuario = $("#nombredeusuario").val();
    var datosPassword = $("#clave").val();
    
    archivoValidacion = "http://phonegapitechii.hoxty.com/php/validacion_de_datos.php?jsoncallback=?";
    $.getJSON( archivoValidacion, { usuario:datosUsuario ,password:datosPassword})
    .done(function(respuestaServer) {
        
        alert(respuestaServer.mensaje + "\nGenerado en: " + respuestaServer.hora + "\n" +respuestaServer.generador)
        
        if(respuestaServer.validacion == "ok"){          
            /// si la validacion es correcta, muestra la pantalla "home"
            $('#formulario1').trigger("reset");   
            $.mobile.changePage("#home");
            $('#n_personalizado').text(datosUsuario);
          
        }else{          
          /// ejecutar una conducta cuando la validacion falla
          $.mobile.changePage("#error");
        }
  
    })
    return false;
});

$('#btn_sign').bind( "click", function(event, ui) {
  $.mobile.changePage("#sign");
});

$('#btn_login').bind( "click", function(event, ui) {
  $.mobile.changePage("#login");
});

$('#btn_inicio').bind( "click", function(event, ui) {
  $.mobile.changePage("#inicio");
});

$('#btn_map').bind( "click", function(event, ui) {
  $.mobile.changePage("#paginaMapa");
});

