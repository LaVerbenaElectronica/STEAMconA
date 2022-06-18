var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var titulo1 = 'Paisaje sonoro basado en el relato <i>Desde hacía algún tiempo</i>.';
var url1 = 'https://archive.org/download/steam-con-a-ies-la-cabrera/Desde-hace-un-tiempo.mp3';
var markerAudio1 = L.marker([40.86,-3.61548], {icon: greenIcon})
.bindPopup('<h3>'+titulo1+'</h3>'+'<audio controls><source src="'+url1+'" type="audio/mp3">Tu navegador no soporta audio.</audio>')
.openPopup()
.addTo(map);

var titulo2 = 'Paisaje sonoro basado en el relato <i>Había pasado un mes</i>.';
var url2 = 'https://archive.org/download/steam-con-a-ies-la-cabrera/Habia-pasado-un-mes.mp3';
var markerAudio2 = L.marker([40.850648, -3.623969], {icon: greenIcon})
.bindPopup('<h3>'+titulo2+'</h3><audio controls><source src="'+url2+'" type="audio/mp3">Tu navegador no soporta audio.</audio>')
.openPopup()
.addTo(map);

var titulo3 = 'Paisaje sonoro basado en el relato <i>Desperté otro día más</i>.';
var url3 = 'https://archive.org/download/steam-con-a-ies-la-cabrera/relato%203.mp3';
var markerAudio3 = L.marker([40.838409, -3.631872], {icon: greenIcon})
.bindPopup('<h3>'+titulo3+'</h3><audio controls><source src="'+url3+'" type="audio/mp3">Tu navegador no soporta audio.</audio>')
.openPopup()
.addTo(map);

var titulo4 = 'Paisaje sonoro basado en el relato <i>El Hombre es el Lobo del Hombre</i>.';
var url4 = 'https://archive.org/download/steam-con-a-ies-la-cabrera/relato%204.mp3';
var markerAudio4 = L.marker([40.826265, -3.626525], {icon: greenIcon})
.bindPopup('<h3>'+titulo4+'</h3><audio controls><source src="'+url4+'" type="audio/mp3">Tu navegador no soporta audio.</audio>')
.openPopup()
.addTo(map);
