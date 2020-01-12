var imageUrl;
let imagem;
let parthenonlat = 37.97025; 
let parthenonlong = 23.72247;
let acropolislat  = 37.96855;
let acropolislong = 23.72848;


let opacity = 1.0;

function setup() {
  noCanvas();
  var map = L.map('mapid').setView([37.97945, 23.71622], 2);
 //Paternon 
    var imageUrl = ['./parthenon.jpg'];

    var bounds = L.latLngBounds([
      [parthenonlat, parthenonlong],
      [parthenonlat+0.01, parthenonlong+0.02]
    ]);

    var imageOverlay = L.imageOverlay( imageUrl, bounds, {
        opacity: 0.3
    }).addTo(map);

 // Museu de Acrópolis
  
    var imageUrl = ['./acropolis.jpg'];

    var bounds = L.latLngBounds([
      [ acropolislat, acropolislong],
      [ acropolislat-0.005, acropolislong-0.0052]
    ]);

    var imageOverlay = L.imageOverlay( imageUrl, bounds, {
        opacity: 0.5
    }).addTo(map);


  
  
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  L.marker([-5.759290, -35.368370]).addTo(map)
    .bindPopup('AEROPORTO  <BR> dia 14 17:20')
    .openPopup();

  L.marker([-3.71839, -38.5434]).addTo(map)
    .bindPopup('FORTALEZA  <BR> dia 14 19:45 ')
    .openPopup();

  L.marker([52.370216, 4.895168]).addTo(map)
    .bindPopup('AMSTERDAM  <BR> dia 15 12:20')
    .openPopup();

  L.marker([37.97945, 23.71622]).addTo(map)
    .bindPopup('ATENAS  <BR> dia 16: passeio pela manhã <BR> e tarde livre')
    .openPopup();
  
   L.marker([parthenonlat, parthenonlong]).addTo(map)
    .bindPopup('ACRÓPOLIS')
    .openPopup();
  
   L.marker([ acropolislat, acropolislong]).addTo(map)
    .bindPopup('MUSEU DE ACRÓPOLIS')
    .openPopup();

  L.marker([37.44529, 25.32872]).addTo(map)
    .bindPopup('MIKONOS<BR> dias 18 e 19')
    .openPopup();

  L.marker([36.393154, 25.461510]).addTo(map)
    .bindPopup('SANTORINI<BR> dias 21 e 22')
    .openPopup();

  L.marker([35.338735, 25.144213]).addTo(map)
    .bindPopup('HERAKLIO<BR> dia 24')
    .openPopup();
 
}
