// Creating map object
var map = L.map('map', {
    center: [19.42,-99.16],
    zoom: 13
});

// Adding tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
    id: 'mapboxstreets-v11',
}).addTo(map);



d3.json("\static\data\extracto.json.js").then(function(data){ console.log(data)});

d3.json("/static/data/estaciones-de-ecobici.geojson").then(d =>{
// Arreglo de markes con stations (looping through the DB)
    var bikeStations = d.features.map(M=>{
        L.marker([M.properties.location_lat, M.properties.location_lon])
        .bindPopup("<h3>" + M.properties.name + "</h3>", {
            maxWidth : "5px",
        }).addTo(map)
    });
})

// Agregar rutas de cicloestación a cicloestación (parejas de quiebre)
var line = [
    [19.434182,-99.189835],
    [19.432888,-99.183605],
]

var line2 = [
    [x_lat,x_lon],
    [y_lat,y_lon],
]


// Plot every line (1, 2, 3, .....)
var polyline = L.polyline(line, {
    color: "purple"
}).addTo(map);



