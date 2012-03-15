$(document).ready(function() {
//    var $mapContainer = $(".js-map");

  var map = new L.Map($(".js-map")[0]);
  var cloudmade = new L.TileLayer('http://{s}.tile.cloudmade.com/b046d1ecb48e42b6a6566b08c1f377ac/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
  });


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position){
        var longitude = position.coords.longitude,
            latitude = position.coords.latitude;

//        console.log(position);
        //get geolocation coordinats for user
        //TODO rewrite comment in leaflet wiki on github!!!!
        var mapCenter = new L.LatLng(latitude, longitude); // geographical point (longitude and latitude)
        map.setView(mapCenter, 15).addLayer(cloudmade);

        $.ajax({
          url: "/api",
          type: "get",
          data: {},
          dataType: "json",
          success : function(data){
//      console.log(data.vehicles.veh.length);
            data = data.vehicles.veh;
            for (i = 0; i < data.length; i++){
              var bus = data[i],
                busCoord = new L.LatLng(bus.lat/1000000, bus.lon/1000000),
                busMarker = new L.Marker(busCoord);

              map.addLayer(busMarker);
            }
          }
        });

        //set markers
//                var youAreHere = new L.LatLng(latitude, longitude);
        var youAreHereMarker = new L.Marker(mapCenter);
        map.addLayer(youAreHereMarker);

      },
      //error handler
      function (){

      }
    );
  }

});
