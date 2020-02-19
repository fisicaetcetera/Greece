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
let barbalhalat =  -7.30551;
let barbalhalong = -39.3025 ;
let picoslat = -7.08699;
let picoslong = -41.4699;
let balsaslat =  -7.53292;
let balsaslong = -46.035;
let carolinalat = -7.33779;
let carolinalong = -47.4679;
let itapecurulat =  -3.39501;
let itapecurulong =  -44.3601;
var latuser;
var lonuser;
var lattxt;
var lontxt;
var latlonuser;
var accuracy;


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

  //map.on('locationfound', onLocationFound);


  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // TRAJETO DE IDA EM AZUL  ---------------------------------------------------
  
var latlngsIda = [
    [-5.759290, -35.368370],
    [-3.71839, -38.5434],
    [52.370216, 4.895168],
    [37.97945, 23.71622],
    [37.44529, 25.32872],
    [36.393154, 25.461510],
    [35.338735, 25.144213]
];
var polylineIda = L.polyline(latlngsIda, {color: 'blue'}).addTo(map);
// zoom the map to the polyline
map.fitBounds(polylineIda.getBounds());
//===============================================================  
  
    // TRAJETO DE VOLTA EM AMARELO  ---------------------------------------------------
   
  var latlngsVolta = [
    [35.338735, 25.144213],
     [37.97945, 23.71622],
      [52.370216, 4.895168],
    [-3.71839, -38.5434],
    [-5.759290, -35.368370]
    ];
  
  var polylineVolta = L.polyline(latlngsVolta, {color: 'yellow'}).addTo(map);
// zoom the map to the polyline
map.fitBounds(polylineVolta.getBounds()); 
  
  let localizacao;
  if("geolocation" in navigator)
        {
          localizacao = true;  
          console.log('geolocation available 🤗️');
            navigator.geolocation.getCurrentPosition(position => {
              const posicao = position.coords;
              console.log(posicao);
              latuser = posicao.latitude;
              lonuser = posicao.longitude;
              lattxt = lat.toString();
              lontxt = lon.toString();
              latlonuser = [lat, lon];
              console.log(latuser,lonuser,latlonuser);
              //const altitude = posicao.altitude.toString();
              //const speed = posicao.speed.toString();
              //const heading = posicao.heading.toString();
              accuracy = posicao.accuracy;
              
            });
             } else {  
              localizacao = false;
             }                                                     

  
  
  //=============================================================

  L.marker([-5.759290, -35.368370], {
      icon: icone
    }).addTo(map)
    .bindPopup('AEROPORTO  <BR> dia 14 17:20 ,<br> Retorno: dia 26')
    .openPopup();

  L.marker([-3.71839, -38.5434], {
      iconSize: [9, 27]
    }).addTo(map)
    .bindPopup('FORTALEZA  <BR> dia 14 19:45  <br> Retorno dia 26 19:00')
    .openPopup();

  L.marker([52.370216, 4.895168]).addTo(map)
    .bindPopup('AMSTERDAM  <BR> dia 15 12:20 <br> Retorno: 12:45 dia 26  20:00')
    .openPopup();

  //ATENAS

  L.marker([37.97945, 23.71622]).addTo(map)
    .bindPopup('ATENAS  <BR> dia 15: chegada e resto do dia livre <br> dia 16 passeio pela manhã e tarde livre <BR> dia 17 partida para MIKONOS. <br> No retorno dias 25 e 26 : 6:00')
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
  }).addTo(map).bindPopup('dia 17: chegada a MIKONOS<br> dias 18 e 19 na ilha' ).openPopup();


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
  }).addTo(map).bindPopup('dias 19 e 20: Mikonos').openPopup();



  // CRETA

  L.marker([35.338735, 25.144213]).addTo(map)
    .bindPopup('CRETA : dia 24 <br> Retorno para Atenas dia 25')
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
 console.log("229",latuser,lonuser,latlonuser);  
if(localizacao){
//function onLocationFound(e) {
  //console.log(e);
    //var radius = e.accuracy;
    //var latitude = e.latitude.toString();
    //var longitude = e.longitude.toString();
    //var deltaAltura = e.altitudeAccuracy.toString;
    //var direcao = e.heading.toString;
    //var velocidade = e.speed.toString();
   console.log("230",latuser,lonuser,latlonuser);
    console.log(latlon,lat,lon);
    //L.marker(latlon).addTo(map)
    //    .bindPopup("Você!<br>Latitude: " +lat+"<br> Longitude: "+ lon).openPopup();
    //L.circle(latlon, accuracy).addTo(map);
}

//map.on('locationfound', onLocationFound);
//function onLocationError(e) {
//    alert(e.message);
//}
//map.on('locationerror', onLocationError);

  
} //setup
