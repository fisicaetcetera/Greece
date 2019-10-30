function setup() { 
  noCanvas();
  var map = L.map('mapid').setView([30, 23.71622], 8);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([ -5.7853, -35.3288]).addTo(map)
    .bindPopup('SÃO GONÇALO  <BR> dia 1')
    .openPopup();
	
L.marker([45.81313, 15.97753]).addTo(map)
    .bindPopup('ZAGREB  <BR> 2, 3, *4<BR>')
    .openPopup();	
	
L.marker([43.508133, 16.440193]).addTo(map)
    .bindPopup('SPLIT  <BR> 4*, 5, 6, *7')
    .openPopup();	
	
L.marker([42.64807, 18.09216]).addTo(map)
    .bindPopup('DUBROVNIK  <BR> 7*, 8, *9')
    .openPopup();	

L.marker([37.97945, 23.71622]).addTo(map)
    .bindPopup('ATENAS  <BR> 9*, 10, *11')
    .openPopup();

L.marker([37.44529, 25.32872]).addTo(map)
    .bindPopup('MIKONOS<BR>DIAS 11*, 12, *13')
    .openPopup();
  
L.marker([36.393154,25.461510]).addTo(map)
    .bindPopup('SANTORINI<BR>DIAS 13*, 14, *15')
    .openPopup();
} 

function draw() { 

}
