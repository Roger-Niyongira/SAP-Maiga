// Add a basemap showing Niger
const map = L.map("map", { zoomSnap: 0.25 });

// Approximate bounds of Niger: southwest and northeast corners.
map.fitBounds([[11.7, 0.1], [23.6, 16.0]], { padding: [20, 20] });

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
