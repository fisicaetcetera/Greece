var imageUrl;
let parthenonlat = 37.97025;
let parthenonlong = 23.72247;
let acropolislat = 37.96855;
let acropolislong = 23.72848;
let mikonoslat = 37.44529;
let mikonoslong = 25.32872;
let knossoslat = 35.298840;
let knossoslong = 25.160721;
let vinhoslat = 36.3764718274;
let vinhoslong = 25.4430365612;
let museuHerakliolat = 35.3370;
let museuHerakliolong = 25.1357;

var icone = L.icon({
  iconUrl: './marker-icon.png',
  shadowUrl: './marker-shadow.png',
  iconSize: [18, 95], // size of the icon
  shadowSize: [20, 95], // size of the shadow
  iconAnchor: [9, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [2, 94], // the same for the shadow
  popupAnchor: [0, -79] // point from which the popup should open relative to the iconAnchor
})

function setup() {

  noCanvas();

  //=====localização
  
  var map = L.map('mapid');
  
  map.locate({
    setView: true,
    maxZoom: 12
  });

  map.on('locationfound', onLocationFound);


  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([-5.759290, -35.368370], {
      icon: icone
    }).addTo(map)
    .bindPopup('AEROPORTO  <BR> dia 14 17:20')
    .openPopup();

  L.marker([-3.71839, -38.5434], {
      iconSize: [9, 27]
    }).addTo(map)
    .bindPopup('FORTALEZA  <BR> dia 14 19:45 ')
    .openPopup();

  L.marker([52.370216, 4.895168]).addTo(map)
    .bindPopup('AMSTERDAM  <BR> dia 15 12:20')
    .openPopup();

  //ATENAS

  L.marker([37.97945, 23.71622]).addTo(map)
    .bindPopup('ATENAS  <BR> dia 16: passeio pela manhã <BR> e tarde livre')
    .openPopup();

  var parthenonIcon = L.icon({
    iconUrl: 'parthenon.jpg',
    iconSize: [50, 40]
  });

  L.marker([parthenonlat, parthenonlong], {
    icon: parthenonIcon
  }).addTo(map).bindPopup('ACRÓPOLIS  ').openPopup();

  var acropolisMuseu = L.icon({
    iconUrl: 'acropolis.jpg',
    iconSize: [40, 70],
    opacity: 0.3
  });

  L.marker([acropolislat, acropolislong], {
      icon: acropolisMuseu
    }).addTo(map)
    .bindPopup('MUSEU DE<br>ACRÓPOLIS')
    .openPopup();



  var mikonosMoinhos = L.icon({
    iconUrl: 'mikonosMoinhos.jpg',
    iconSize: [50, 40]
  });

  L.marker([mikonoslat, mikonoslong], {
    icon: mikonosMoinhos
  }).addTo(map).bindPopup('Mikonos Moinhos de vento').openPopup();


  //SANTORINI

  L.marker([36.393154, 25.461510]).addTo(map)
    .bindPopup('SANTORINI<BR> dias 21 e 22')
    .openPopup();

  //Vinhos-Santorini



  var santoriniVinhos = L.icon({
    iconUrl: './santoriniWine.jpg',
    iconSize: [50, 40]
  });

  L.marker([vinhoslat, vinhoslong], {
      icon: santoriniVinhos
    }).addTo(map)
    .bindPopup('Santorini:<br>Degustação de VINHOS')
    .openPopup();


  //Mykonos windmills

  L.marker([mikonoslat, mikonoslong], {
    icon: mikonosMoinhos
  }).addTo(map).bindPopup('Mikonos Moinhos de vento').openPopup();



  // CRETA

  L.marker([35.338735, 25.144213]).addTo(map)
    .bindPopup('HERAKLIO<BR> dia 24')
    .openPopup();


  var knossosIcon = L.icon({
    iconUrl: 'knossosPalace.jpg',
    iconSize: [50, 40]
  });

  L.marker([knossoslat, knossoslong], {
    icon: knossosIcon
  }).addTo(map).bindPopup('Palácio de Knossos').openPopup();

  var museuHeraklioIcon = L.icon({
    iconUrl: 'museuHeraklio.jpeg',
    iconSize: [50, 40]
  });

  L.marker([museuHerakliolat, museuHerakliolong], {
    icon: museuHeraklioIcon
  }).addTo(map).bindPopup('Museu Arqueológico de Heráclio').openPopup();

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("Você!").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);

  
} //setup