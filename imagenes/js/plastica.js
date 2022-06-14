var imageUrl = 'imagenes/plastica/ar1.png';
var errorOverlayUrl = 'https://cdn-icons-png.flaticon.com/512/110/110686.png';
var altText = 'Imagen elaborada por Adolfo Rodríguez García';
var latLngBounds = L.latLngBounds([[40.86619,-3.61548], [40.86719,-3.61648]]);

var imageOverlay = L.imageOverlay(imageUrl, latLngBounds, {
    opacity: 0.8,
    errorOverlayUrl: errorOverlayUrl,
    alt: altText,
    interactive: true
}).addTo(map).bindPopup(altText);