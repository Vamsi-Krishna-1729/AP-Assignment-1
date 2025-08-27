var mymap = L.map('mapid').setView([38.6270, -90.1994], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(mymap);

// Helper function to create colored icons
function colorIcon(url) {
  return L.icon({
    iconUrl: url,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -28]
  });
}

var redIcon    = colorIcon('https://maps.google.com/mapfiles/ms/icons/red-dot.png');
var blueIcon   = colorIcon('https://maps.google.com/mapfiles/ms/icons/blue-dot.png');
var greenIcon  = colorIcon('https://maps.google.com/mapfiles/ms/icons/green-dot.png');
var yellowIcon = colorIcon('https://maps.google.com/mapfiles/ms/icons/yellow-dot.png');
var purpleIcon = colorIcon('https://maps.google.com/mapfiles/ms/icons/purple-dot.png');


//  Restaurant 1 
var marker1 = L.marker([38.622, -90.287], { icon: redIcon }).addTo(mymap);
marker1.bindPopup("<b>Resturant 1</b><br>Spiros").openPopup();

//  Restaurant 2 
var marker2 = L.marker([38.661, -90.563], { icon: blueIcon }).addTo(mymap);
marker2.bindPopup("<b>Resturant 2</b><br>Annie Gunns");

//  Restaurant 3
var marker3 = L.marker([38.624, -90.185], { icon: greenIcon }).addTo(mymap);
marker3.bindPopup("<b>Restaurant 3</b><br>Biryani Bar-B-Q");

//  Restaurant 4
var marker4 = L.marker([38.6339, -90.2005], { icon: yellowIcon }).addTo(mymap);
marker4.bindPopup("<b>Restaurant 4</b><br>Swagruha");

//  Restaurant 5
var marker5 = L.marker([38.6367, -90.2931], { icon: purpleIcon }).addTo(mymap);
marker5.bindPopup("<b>Restaurant 5</b><br>Hyderabadi Biryani");
