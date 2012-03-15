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
        //lat  : "54.619886",
        //lng  : "39.744954",
        lat : "43.113426",
        lng : "131.911641",
        zoom : 14
      };
      var mapCenter = new L.LatLng(defaultCoords.lat, defaultCoords.lng);
      map.setView(mapCenter, defaultCoords.zoom);
      this.setCurrentCoords();
      this.drawBuses();
      this.refreshInterval = setInterval(this.drawBuses, 10000);
    },

    //get geolocation
    setCurrentCoords: function(){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
          function(position){
//            console.log(position);
            var mapCenter = new L.LatLng(position.coords.latitude, position.coords.longitude);
            map.setView(mapCenter, 16);
          }
        );
      }
    },

    //get buses and draw
    drawBuses: function(){
//      var app = this;
      $.ajax({
        url: "/api",
        type: "get",
        data: {},
        dataType: "json",
        success : function(data){
//      console.log(data.vehicles.veh.length);
//          console.log(data.);
          if(data.vehicles != null){
            var data = data.vehicles.veh;

            for (i = 0; i < data.length; i++){
              var bus       = data[i],
                busCoord  = new L.LatLng(bus.lat/1000000, bus.lon/1000000),
                busMarker = new L.Marker(busCoord);

              //todo переписать это позорище ;)
              var busExist = false;
              for (ii = 0; ii < app.buses.length; ii++) {
                if (app.buses[ii] != undefined){
                  if(bus.id == app.buses[ii].busId){
                    app.buses[ii].busMarker.setLatLng(busCoord);
                    busExist = true;
                  }
                }
              }

              //if bus dont exist add marker and
              if(!busExist){
                map.addLayer(busMarker);
                app.buses.push({
                  "busId"    : bus.id,
                  "busMarker" : busMarker,
                  "parseObj"  : bus
                });
              }

              //animated
              if(bus.anim_pos){
//                animatedBuses.push({
//                  "animate"   : bus.anim_pos,
//                  "busMarker" : busMarker
//                });
              }
            } //for

            //do animation here
            app.animateBuses();
//          app.buses = busesDump;
          }
        }
      });
    },

    //array of buses
    buses: [],

    //array of animated buses
    animatedBuses: [],

    //animate buses
    animateBuses : function(){
       //<pts big_jump=\"0\" key=\"1348\">
       //<p lon=\"39733515\" lat=\"54627972\" dir=\"270\" percent=\"50\" />
       //<p lon=\"39733515\" lat=\"54628593\" dir=\"270\" percent=\"50\" />
       //</pts>
    },

    refreshInterval :undefined

  };

  app.init();
  $refreshButton.bind("click", function(){
    app.drawBuses();
  })
});
