// Check to see if code is working
console.log("working");

// Create map object with a center and zoom level
let map = L.map('mapid').setView([40.5989, -99.4937], 5);

// Coordinates for each point to be used in the polyline.
let line = [
[44.944927229871546, -102.21215042065377],
[44.99768012904075, -110.99149652575922],
[33.091575651975, -110.8401216021006],
[41.300819401959004, -111.05134253190462,],
[41.337250635153794, -104.07163873092796]


  // [37.6214, -122.3790],
  // [44.1218, -123.2159],
  // [30.1975, -97.6664],
  // [43.6777, -79.6248],
  // [40.6413, -73.7781]
];

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
  color: "blue",
  weight: 4,
  dashArray: '7, 7',
  dashOffset: '20',
  opacity: .5
}).addTo(map);

// Create tile layer that is background of map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Add layer to the map
streets.addTo(map);

// Get data from cities.js
let cityData = cities;

// Loop through cities and create marker for each
cityData.forEach((city) => {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/200000,
        weight: 4,
        color: '#d99323'
    })
    .bindPopup(`<h2> ${city.city}, ${city.state}</h2> <hr> <h3>Population: ${city.population.toLocaleString()}</h3>`)
    .addTo(map);
});