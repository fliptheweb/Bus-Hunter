$(document).ready(function() {
    var $mapContainer = $(".js-map");

    var map = new L.Map('map');
    var cloudmade = new L.TileLayer('http://{s}.tile.cloudmade.com/YOUR-API-KEY/997/256/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 18
    });

    //get geolocation coordinats for user
    var london = new L.LatLng(51.505, -0.09); // geographical point (longitude and latitude)
    map.setView(london, 13).addLayer(cloudmade);

    //set markers
    var markerLocation = new L.LatLng(51.5, -0.09);
    var marker = new L.Marker(markerLocation);
    map.addLayer(marker);
});
