var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var blackIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var titulo1 = 'Paisaje sonoro basado en el relato <i>Desde hacía algún tiempo</i>.';
var url1 = 'https://archive.org/download/steam-con-a-ies-la-cabrera/Desde-hace-un-tiempo.mp3';
var markerAudio1 = L.marker([40.858735, -3.617612], {icon: greenIcon})
.bindPopup('<h3>'+titulo1+'</h3>'+'<audio controls><source src="'+url1+'" type="audio/mp3">Tu navegador no soporta audio.</audio>')
.openPopup()
.addTo(map);

var titulo2 = 'Paisaje sonoro basado en el relato <i>Había pasado un mes</i>.';
var url2 = 'https://archive.org/download/steam-con-a-ies-la-cabrera/Habia-pasado-un-mes.mp3';
var markerAudio2 = L.marker([40.850565, -3.628364], {icon: greenIcon})
.bindPopup('<h3>'+titulo2+'</h3><audio controls><source src="'+url2+'" type="audio/mp3">Tu navegador no soporta audio.</audio>')
.openPopup()
.addTo(map);

var titulo3 = 'Paisaje sonoro basado en el relato <i>Desperté otro día</i>.';
var url3 = 'https://archive.org/download/steam-con-a-ies-la-cabrera/relato%203.mp3';
var markerAudio3 = L.marker([40.845079, -3.632913], {icon: greenIcon})
.bindPopup('<h3>'+titulo3+'</h3><audio controls><source src="'+url3+'" type="audio/mp3">Tu navegador no soporta audio.</audio>')
.openPopup()
.addTo(map);

var titulo4 = 'Paisaje sonoro basado en el relato <i>El Hombre es el Lobo del Hombre</i>.';
var url4 = 'https://archive.org/download/steam-con-a-ies-la-cabrera/relato%204.mp3';
var markerAudio4 = L.marker([40.853965, -3.615822], {icon: greenIcon})
.bindPopup('<h3>'+titulo4+'</h3><audio controls><source src="'+url4+'" type="audio/mp3">Tu navegador no soporta audio.</audio>')
.openPopup()
.addTo(map);

var titulo5 = 'Paisaje sonoro basado en el relato <i>Me llamo Ben</i>.';
var url5 = 'https://archive.org/download/steam-con-a-ies-la-cabrera/relato5.me%20llamo%20ben...mp3';
var markerAudio3 = L.marker([40.838634, -3.635563], {icon: greenIcon})
.bindPopup('<h3>'+titulo5+'</h3><audio controls><source src="'+url5+'" type="audio/mp3">Tu navegador no soporta audio.</audio>')
.openPopup()
.addTo(map);

var titulo6 = 'Paisaje sonoro basado en el relato <i>Tras la crisis</i>.';
var url6 = 'https://archive.org/download/steam-con-a-ies-la-cabrera/relato%206.%20tras%20la%20crisis.mp3';
var markerAudio4 = L.marker([40.831483, -3.637601], {icon: greenIcon})
.bindPopup('<h3>'+titulo6+'</h3><audio controls><source src="'+url6+'" type="audio/mp3">Tu navegador no soporta audio.</audio>')
.openPopup()
.addTo(map);

var titulo7 = 'Entrevista realizada a alumnado de 1º ESO del IES la Cabrera';
var url7 = 'https://archive.org/download/steam-con-a-literatura/entrevistas-ies-la-cabrera.mp3';
var markerAudio4 = L.marker([40.867584, -3.609892], {icon: blackIcon})
.bindPopup('<h3>'+titulo7+'</h3><audio controls><source src="'+url7+'" type="audio/mp3">Tu navegador no soporta audio.</audio>')
.openPopup()
.addTo(map);
