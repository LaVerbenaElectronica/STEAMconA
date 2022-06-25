var orangeIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


//Modelos

var Modelo1 = L.marker([40.867768, -3.609670], {icon: orangeIcon})
.bindPopup('<h3>Modelo 1</h3><p>Elaborado con Minecraft</p><img src="imagenes/tecnologia/modelo1.gif" alt="modelo 1"  width="250" />', {maxWidth : 900})
.openPopup()
.addTo(map);


var Modelo2 = L.marker([40.867723, -3.609614], {icon: orangeIcon})
.bindPopup('<h3>Modelo 2</h3><p>Elaborado con Minecraft</p><img src="imagenes/tecnologia/modelo2.gif" alt="modelo 2"  width="250" />', {maxWidth : 900})
.openPopup()
.addTo(map);

var Modelo3 = L.marker([40.867715, -3.609506], {icon: orangeIcon})
.bindPopup('<h3>Modelo 3</h3><p>Elaborado con Minecraft</p><img src="imagenes/tecnologia/modelo3.gif" alt="modelo 3"  width="250" />', {maxWidth : 900})
.openPopup()
.addTo(map);

var Modelo4 = L.marker([40.867652, -3.609589], {icon: orangeIcon})
.bindPopup('<h3>Modelo 4</h3><p>Elaborado con Minecraft</p><img src="imagenes/tecnologia/modelo4.gif" alt="modelo 4"  width="250" />', {maxWidth : 900})
.openPopup()
.addTo(map);

var Modelo5 = L.marker([40.867697, -3.609720], {icon: orangeIcon})
.bindPopup('<h3>Modelo 5</h3><p>Elaborado con Minecraft</p><img src="imagenes/tecnologia/modelo5.gif" alt="modelo 5"  width="250" />', {maxWidth : 900})
.openPopup()
.addTo(map);
