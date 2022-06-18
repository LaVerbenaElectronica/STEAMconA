var yellowIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var titulo1 = 'Lectura del relato <i>Desde hace algún tiempo</i>.';
var url1 = 'https://archive.org/download/steam-con-a-literatura/Desde-hace-un-tiempo.mp3';
var markerAudio1 = L.marker([40.858735, -3.618612], {icon: yellowIcon})
.bindPopup('<h3>'+titulo1+'</h3>'+'<audio controls><source src="'+url1+'" type="audio/mp3">Tu navegador no soporta audio.</audio>')
.openPopup()
.addTo(map);

var titulo2 = 'Lectura del relato <i>El hombre es el Lobo del hombre</i>.';
var url2 = 'https://archive.org/download/steam-con-a-literatura/El-hombre-es-el-lobo-del-hombre.mp3';
var markerAudio2 = L.marker([40.853965, -3.616822], {icon: yellowIcon})
.bindPopup('<h3>'+titulo2+'</h3><audio controls><source src="'+url2+'" type="audio/mp3">Tu navegador no soporta audio.</audio>')
.openPopup()
.addTo(map);

var titulo3 = 'Lectura del relato <i>Había pasado un mes</i>.';
var url3 = 'https://archive.org/download/steam-con-a-literatura/Habia-pasado-un-mes.mp3';
var markerAudio3 = L.marker([40.850565, -3.629364], {icon: yellowIcon})
.bindPopup('<h3>'+titulo3+'</h3><audio controls><source src="'+url3+'" type="audio/mp3">Tu navegador no soporta audio.</audio>')
.openPopup()
.addTo(map);

var titulo4 = 'Lectura del relato <i>Me desperté otro día más</i>.';
var url4 = 'https://archive.org/download/steam-con-a-literatura/Me-desperte-otro-dia-mas.mp3';
var markerAudio4 = L.marker([40.845079, -3.633913], {icon: yellowIcon})
.bindPopup('<h3>'+titulo4+'</h3><audio controls><source src="'+url4+'" type="audio/mp3">Tu navegador no soporta audio.</audio>')
.openPopup()
.addTo(map);

var titulo5 = 'Lectura del relato <i>Me llamo Ben</i>.';
var url5 = 'https://archive.org/download/steam-con-a-literatura/Me-llamo-Ben.mp3';
var markerAudio3 = L.marker([40.838634, -3.636563], {icon: yellowIcon})
.bindPopup('<h3>'+titulo5+'</h3><audio controls><source src="'+url5+'" type="audio/mp3">Tu navegador no soporta audio.</audio>')
.openPopup()
.addTo(map);

var titulo6 = 'Lectura del relato <i>Tras la crisis</i>.';
var url6 = 'https://archive.org/download/steam-con-a-literatura/Tras-la-crisis.mp3';
var markerAudio4 = L.marker([40.831483, -3.638601], {icon: yellowIcon})
.bindPopup('<h3>'+titulo6+'</h3><audio controls><source src="'+url6+'" type="audio/mp3">Tu navegador no soporta audio.</audio>')
.openPopup()
.addTo(map);