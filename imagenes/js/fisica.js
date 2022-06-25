var blueIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


//Graficas

var markerFisica1 = L.marker([40.8622927, -3.6143477], {icon: blueIcon})
.bindPopup('<h3>Gráfica de mediciones La Cabrera</h3><p>Responsable de la medición: Eduardo Del Pozo Valero, 3ºA ESO</p><p>Contador GEIGER Marca PIERRON MD 22014</p><img src="imagenes/fisica/fisica2.png" /> ', {maxWidth : 1500})
.openPopup()
.addTo(map);


var markerFisica2 = L.marker([40.859662, -3.707429], {icon: blueIcon})
.bindPopup('<h3>Gráfica de mediciones Bustarviejo</h3><p>Responsable de la medición: Manuel Juárez Fernádez, 3ºB ESO</p><p>Contador GEIGER Marca PIERRON MD 22014</p><img src="imagenes/fisica/fisica3.png" />', {maxWidth : 1500})
.openPopup()
.addTo(map);

var markerFisica2 = L.marker([40.858762, -3.710429], {icon: blueIcon})
.bindPopup('<h3>Gráfica de mediciones Bustarviejo</h3><p>Responsable de la medición: Hugo Álvarez Mejías, 3ºB ESO</p><p>Contador GEIGER Marca PIERRON MD 22014</p><img src="imagenes/fisica/fisica3.png" />', {maxWidth : 1500})
.openPopup()
.addTo(map);

var markerFisica3 = L.marker([40.864695, -3.614010], {icon: blueIcon})
.bindPopup('<h3>Fotografía mediciones Radioactividad</h3><img src="imagenes/fisica/fisica1.png" />', {maxWidth : 900})
.openPopup()
.addTo(map);

///Mediciones

var markerFisica4 = L.marker([40.8677256, -3.6099724], {icon: blueIcon})
.bindPopup('<h3>Punto A Radioactividad</h3><p>Dosis (microSv/h): 0.19</p><p>Dosis (microGy/h): 0.15</p><p>Dosis (mR/h): 0.02</p><p>Medición realizada por el alumnado de 3º ESO</p>', {maxWidth : 900})
.openPopup()
.addTo(map);

var markerFisica5 = L.marker([40.8627947, -3.6167574], {icon: blueIcon})
.bindPopup('<h3>Punto B Radioactividad</h3><p>Dosis (microSv/h): 0.15</p><p>Dosis (microGy/h): 0.20</p><p>Dosis (mR/h): 0.02</p><p>Medición realizada por el alumnado de 3º ESO</p>', {maxWidth : 900})
.openPopup()
.addTo(map);

var markerFisica6 = L.marker([40.8608078, -3.6186275], {icon: blueIcon})
.bindPopup('<h3>Punto C Radioactividad</h3><p>Dosis (microSv/h): 0.43</p><p>Dosis (microGy/h): 0.38</p><p>Dosis (mR/h): 0.01</p><p>Medición realizada por el alumnado de 3º ESO</p>', {maxWidth : 900})
.openPopup()
.addTo(map);

var markerFisica7 = L.marker([40.858683, -3.619227], {icon: blueIcon})
.bindPopup('<h3>Punto D Radioactividad</h3><p>Dosis (microSv/h): 0.25</p><p>Dosis (microGy/h): 0.20</p><p>Dosis (mR/h): 0.01</p><p>Medición realizada por el alumnado de 3º ESO</p>', {maxWidth : 900})
.openPopup()
.addTo(map);

var markerFisica8 = L.marker([40.85796, -3.6157350], {icon: blueIcon})
.bindPopup('<h3>Punto E Radioactividad</h3><p>Dosis (microSv/h): 0.30</p><p>Dosis (microGy/h): 0.33</p><p>Dosis (mR/h): 0.01</p><p>Medición realizada por el alumnado de 3º ESO</p>', {maxWidth : 900})
.openPopup()
.addTo(map);

var markerFisica9 = L.marker([40.8650468, -3.6125366], {icon: blueIcon})
.bindPopup('<h3>Punto F Radioactividad</h3><p>Dosis (microSv/h): 0.36</p><p>Dosis (microGy/h): 0.30</p><p>Dosis (mR/h): 0.02</p><p>Medición realizada por el alumnado de 3º ESO</p>', {maxWidth : 900})
.openPopup()
.addTo(map);