require(['leaflets'],function(Leaflet){

	var map = L.map('map').setView([53.423593,-2.326083], 13);

// black and white 49189
// black orange 53428
// black blue 67367
	L.tileLayer('http://{s}.tile.cloudmade.com/75ce905adf984d18b44fb1eceb1ed770/67367/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);
})