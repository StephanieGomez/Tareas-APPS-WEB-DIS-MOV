        	$( document ).on( "pageinit", "#paginaMapa", function(e,data) {
				
				var defaultPos = new google.maps.LatLng(28.7090258,-106.1059379);
				
				if (navigator.geolocation) {
		                function exito(pos) {
                     		MuestraMapa(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));						 	 
                   		}
						function falla(error) {
						//si falla mostrar mpara en posicion por defecto
							alert('Error en servicio Geolocalizador');
							MuestraMapa(defaultPos); 
						}
						
					//maximumAge- Guarda la posicion por 5 minutos 
					//enableHighAccuracy: Se tratan de obtener los mejores resultados posible del GPS
					//timeout: el tiempo maximo que se espera para obtener la posicion en este caso 5 segundos
						var options = {maximumAge: 500000, enableHighAccuracy:true, timeout: 5000};
						navigator.geolocation.getCurrentPosition(exito, falla, options );
					}//FIN IF
					else {
                    	MuestraMapa(defaultPos);  // No soporta geolocalizacion y dibuja el mapa en posicion Default
               		 }
					 
					 //FUNCION DIBUJAR MAPa
					 function MuestraMapa(latlng) {
						
						var myOptions = {
                        zoom: 16,
                        center: latlng,
						disableDefaultUI: true,
                        mapTypeId: google.maps.MapTypeId.ROADMAP};
						
						var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
						var infowindow = new google.maps.InfoWindow({
                                  position: latlng,
                                  content: '<p>Tu posición actual</p>'+latlng
								  });
						
						var marker = new google.maps.Marker({
							position: latlng,
							map: map,
							title: "Mi posición",
							animation: google.maps.Animation.DROP
                    	});
						google.maps.event.addListener(marker, 'click', function() {infowindow.open(map,marker);});
						 
					 }// Fin muestra mapa
				
				});
       