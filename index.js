var map;
$(document).ready(function() {
  $('#getInfo').click(function() {
    $.getJSON('https://ipapi.co/json', function(data) {
        //          $.getJSON('https://freegeoip.net/json/',function(data) {
        //          $.getJSON('https://ipinfo.io/json',function(data) {
        console.log(data);
        $("#getInfo").hide();
        $("#spacer-1").hide();
        $("#json").text(JSON.stringify(data, null, 2));
        $("#json").show();
        $("#map").show();
        $("#map").height(window.innerHeight);
        var uluru = {
          lat: -25.363,
          lng: 131.044
        };
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: uluru
        });
        let latlng = new google.maps.LatLng(data.latitude, data.longitude)
        map.panTo(latlng);
        let marker = new google.maps.Marker({
          position: latlng,
          map: map
        });
      })
      .done(function() {
        console.log('getJSON request succeeded!');
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log('getJSON request failed! ' + textStatus);
        console.log("incoming " + jqXHR.responseText);
      })
      .always(function() {
        console.log('getJSON request ended!');
      });
  });
});

function initMap() {
  var uluru = {
    lat: -25.363,
    lng: 131.044
  };
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
