// Check to see if code is working
console.log("working");

// Create map object with a center and zoom level
let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [37.6214, -122.3790]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "red"
  }).addTo(map);

// Create tile layer that is background of map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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