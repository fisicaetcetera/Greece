///Dropbox/local-server/Ellada/Greece-master
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
let madrilat = 40.416775;
let madrilong = -3.703750;
let miloslat = 36.726013;
let miloslong = 24.446859;
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

  map.setView([-6,-35],5);
  //map.on('locationfound', onLocationFound);


  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  //Escala
  L.control.scale({
     metric: true,
     imperial: false,
     position: 'topleft'
  }).addTo(map);
  //Watermark, meu
  L.Control.Watermark=L.Control.extend({
   onAdd: function(map){
      var img = L.DomUtil.create('img');
      img.src = 'eniLogo.ico';
      img.style.width = '30px';
      return img;
      },
    onRemove: function(map){},
    });
    
    L.control.watermark = function(opts){
      return new L.Control.Watermark(opts);
    }
    
    L.control.watermark({position: 'topleft'}).addTo(map);  
//Water mark, beit
  L.Control.Watermark=L.Control.extend({
   onAdd: function(map){
      var img = L.DomUtil.create('img');
      img.src = 'beitLogo.png';
      img.style.width = '100px';
      return img;
      },
    onRemove: function(map){},
    });
    
    L.control.watermark = function(opts){
      return new L.Control.Watermark(opts);
    }
    
    L.control.watermark({position: 'topleft'}).addTo(map);  

  // TRAJETO DE IDA EM AZUL  ---------------------------------------------------
  
var latlngsIda = [
    [-5.759290, -35.368370], //Natal
    [-23.454, -46.534096], // Sao Paulo
    [40.416775, -3.703750], //Madrid
    [37.98310, 23.72739], // Atenas
    [37.44529, 25.32872],  // Mykonos
    [36.393154, 25.461510],  //  Santorini
    [35.338735, 25.144213]  //Creta
];
var polylineIda = L.polyline(latlngsIda, {color: 'blue'}).addTo(map);
// zoom the map to the polyline
map.fitBounds(polylineIda.getBounds());
//===============================================================  
  
    // TRAJETO DE VOLTA EM AMARELO  ---------------------------------------------------
   
  var latlngsVolta = [
    [35.338735, 25.144213], //Creta
        [36.726013, 24.446859],  //Milos
     [37.99945, 23.71622],  //Atenas
    [40.416775, -3.803750], //Madrid
    [-23.454, -46.634096], // Sao Paulo    
    [-5.759290, -35.468370] //Natal
    ];
  
  var polylineVolta = L.polyline(latlngsVolta, {color: 'yellow'}).addTo(map);
// zoom the map to the polyline
map.fitBounds(polylineVolta.getBounds()); 
  
  let localizacao = false;
  if("geolocation" in navigator)
        {
          localizacao = true;  
          console.log('geolocation available 🤗️');
            navigator.geolocation.getCurrentPosition(position => {
              const posicao = position.coords;
              console.log(posicao);
              latuser = posicao.latitude;
              lonuser = posicao.longitude;
              lattxt = latuser.toString();
              lontxt = lonuser.toString();
              latlonuser = [latuser, lonuser];
              console.log(latuser,lonuser,latlonuser);
              //const altitude = posicao.altitude.toString();
              //const speed = posicao.speed.toString();
              //const heading = posicao.heading.toString();
              accuracy = posicao.accuracy;
               L.marker(latlonuser).addTo(map).bindPopup("Você!<br>Latitude: " +latuser+"<br> Longitude: "+ lonuser).openPopup();
              L.circle(latlonuser, accuracy).addTo(map);
              map.setView(latlonuser, 5); // ([latuser, lonuser], zoom)
            });
             } else {  
              localizacao = false;
             } 
  console.log("115-just outside anonymous",latuser,lonuser,latlonuser);

  
  
  //=============================================================

  L.marker([-5.759290, -35.368370], {
      icon: icone
    }).addTo(map)
    .bindPopup('AEROPORTO  <BR> dia 5 ,<br> Retorno: dia 16 ')
    .openPopup();
    
  // MADRI
  L.marker([madrilat, madrilong]).addTo(map)
    .bindPopup('MADRI. Dias 6 e 15 ')
    .openPopup();

  //ATENAS

  L.marker([37.97945, 23.71622]).addTo(map)
    .bindPopup('ATENAS  <BR> dias 6, 7 e 8')
    .openPopup();
    
     // MILOS
  L.marker([miloslat, miloslong]).addTo(map)
    .bindPopup('MILOS: dia ?')
    .openPopup(); 

  var parthenonIcon = L.icon({
    iconUrl: 'parthenon.jpg',
    iconSize: [50, 40]
  });

  L.marker([parthenonlat, parthenonlong], {
    icon: parthenonIcon
  }).addTo(map).bindPopup('ACRÓPOLIS  ').openPopup();





  var mikonosMoinhos = L.icon({
    iconUrl: 'mikonosMoinhos.jpg',
    iconSize: [50, 40]
  });

  L.marker([mikonoslat, mikonoslong], {
    icon: mikonosMoinhos
  }).addTo(map).bindPopup('dias ...' ).openPopup();


  //SANTORINI

  L.marker([36.393154, 25.461510]).addTo(map)
    .bindPopup('SANTORINI<BR> dias ')
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
  }).addTo(map).bindPopup('MIKONOS: dias ').openPopup();



  // CRETA

  L.marker([35.338735, 25.144213]).addTo(map)
    .bindPopup('CRETA : dia ...')
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
    iconAnchor: [0,0],
    icon: museuHeraklioIcon
  }).addTo(map).bindPopup('Museu Arqueológico de Heráclio').openPopup(); 
  
} //setup
