function setup() {
  noCanvas();
  //var map = L.map('mapid').setView([35.338735 , 25.144213], 2);
  var map = L.map('mapid').fitWorld();
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([ -5.759290, -35.368370]).addTo(map)
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

  L.marker([37.44529, 25.32872]).addTo(map)
    .bindPopup('MIKONOS<BR> dias 18 e 19')
    .openPopup();

  L.marker([36.393154, 25.461510]).addTo(map)
    .bindPopup('SANTORINI<BR> dias 21 e 22')
    .openPopup();

  L.marker([35.338735, 25.144213]).addTo(map)
    .bindPopup('HERAKLIO<BR> dia 24')
    .openPopup();

  map.locate({
    setView: true,
    maxZoom: 12
  });

  function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
      .bindPopup("Você!").openPopup();

    L.circle(e.latlng, radius).addTo(map);
  }

  map.on('locationfound', onLocationFound);


}

function draw() {

}
