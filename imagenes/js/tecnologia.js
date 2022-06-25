var orangeIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


//Modelos

var Modelo1 = L.marker([40.867278, -3.609770], {icon: orangeIcon})
.bindPopup('<h3>Modelo 1</h3><p>Elaborado con Minecraft</p><img src="imagenes/tecnologia/modelo1.gif" alt="modelo 1"  width="250" />', {maxWidth : 900})
.openPopup()
.addTo(map);


var Modelo2 = L.marker([40.867233, -3.609714], {icon: orangeIcon})
.bindPopup('<h3>Modelo 2</h3><p>Elaborado con Minecraft</p><img src="imagenes/tecnologia/modelo2.gif" alt="modelo 2"  width="250" />', {maxWidth : 900})
.openPopup()
.addTo(map);

var Modelo3 = L.marker([40.867225, -3.609606], {icon: orangeIcon})
.bindPopup('<h3>Modelo 3</h3><p>Elaborado con Minecraft</p><img src="imagenes/tecnologia/modelo3.gif" alt="modelo 3"  width="250" />', {maxWidth : 900})
.openPopup()
.addTo(map);

var Modelo4 = L.marker([40.867262, -3.609689], {icon: orangeIcon})
.bindPopup('<h3>Modelo 4</h3><p>Elaborado con Minecraft</p><img src="imagenes/tecnologia/modelo4.gif" alt="modelo 4"  width="250" />', {maxWidth : 900})
.openPopup()
.addTo(map);

var Modelo5 = L.marker([40.867207, -3.609820], {icon: orangeIcon})
.bindPopup('<h3>Modelo 5</h3><p>Elaborado con Minecraft</p><img src="imagenes/tecnologia/modelo5.gif" alt="modelo 5"  width="250" />', {maxWidth : 900})
.openPopup()
.addTo(map);

//Proyectos

var Modelo1 = L.marker([40.867768, -3.609670], {icon: orangeIcon})
.bindPopup('<h3>Prototipo Cuidador: Elefante</h3><p>Elaborado por Francisco y David. 2º Bachillerato</p><img src="imagenes/tecnologia/proyecto1.gif" alt="proyecto 1"  width="250" />', {maxWidth : 900})
.openPopup()
.addTo(map);


var Modelo2 = L.marker([40.867723, -3.609614], {icon: orangeIcon})
.bindPopup('<h3>Prototipo Cuidador: FROWG</h3><p>Elaborado Violeeta y Mario. 2º de Bachillerato</p><img src="imagenes/tecnologia/proyecto2.gif" alt="proyecto 2"  width="250" />', {maxWidth : 900})
.openPopup()
.addTo(map);

var Modelo3 = L.marker([40.867715, -3.609506], {icon: orangeIcon})
.bindPopup('<h3>Prototipo Cuidador: SAPOTT</h3><p>Elaborado por Joel y Diego. 2º Bachillerato</p><img src="imagenes/tecnologia/proyecto3.gif" alt="modelo 3"  width="250" />', {maxWidth : 900})
.openPopup()
.addTo(map);

var Modelo4 = L.marker([40.867652, -3.609589], {icon: orangeIcon})
.bindPopup('<h3>Prototipo Cuidador 4: Medidor de humedad relativa</h3><p>Elaborado por Lucía e Irene. 2º Bachillerato</p><img src="imagenes/tecnologia/proyecto4.gif" alt="modelo 4"  width="250" />', {maxWidth : 900})
.openPopup()
.addTo(map);

var Modelo5 = L.marker([40.867697, -3.609720], {icon: orangeIcon})
.bindPopup('<h3>Prototipo Cuidador 5: Medidor de decibelios</h3><p>Elaborado por Cristina y Pablo. 2º Bachillerato</p><img src="imagenes/tecnologia/proyecto5.gif" alt="modelo 5"  width="250" />', {maxWidth : 900})
.openPopup()
.addTo(map);