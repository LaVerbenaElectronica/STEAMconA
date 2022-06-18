var redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


var markerAudio1 = L.marker([40.864177, -3.612366], {icon: redIcon})
.bindPopup('<h3>Gráfica de periodicidad en la compra de productos</h3><img src="imagenes/biologia/diagrama1.png" /> ', {maxWidth : 900})
.openPopup()
.addTo(map);


var markerAudio2 = L.marker([40.864695, -3.614010], {icon: redIcon})
.bindPopup('<h3>Procentaje de alimentos procesados</h3><img src="imagenes/biologia/diagrama2.png" />', {maxWidth : 900})
.openPopup()
.addTo(map);