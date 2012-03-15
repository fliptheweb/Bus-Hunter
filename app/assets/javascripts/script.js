$(document).ready(function() {

  var map = new L.Map($(".js-map")[0]),
      $refreshButton = $(".js-map-refresh");
  var cloudmade = new L.TileLayer('http://{s}.tile.cloudmade.com/b046d1ecb48e42b6a6566b08c1f377ac/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
  });
  map.addLayer(cloudmade);

  var app = {
    init : function(){
      //set default coords to vl
      var defaultCoords = {
        lat : "54.619886",
        lng : "39.744954",
        zoom : 15
      };
      var mapCenter = new L.LatLng(defaultCoords.lat, defaultCoords.lng);
      map.setView(mapCenter, defaultCoords.zoom);
//      this.setCurrentCoords();
      this.drawBuses();
    },

    //get geolocation
    setCurrentCoords: function(){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
          function(position){
            console.log(position);
            var mapCenter = new L.LatLng(position.coords.latitude, position.coords.longitude);
            map.setView(mapCenter, 15);
          }
        );
      }
    },

    //get buses and draw
    drawBuses: function(){
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
    }
  };

  app.init();
  $refreshButton.bind("click", function(){
    app.drawBuses();
  })
});
