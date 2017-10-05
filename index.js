var map;
$(document).ready(function() {
  $('#getInfo').click(function() {
    $.getJSON('https://ipapi.co/json', function(data) {
        console.log(data);
        $("#getInfo").hide();
        $("#spacer-1").hide();
        $("#spacer-2").hide();
        $("#json").text(JSON.stringify(data, null, 2));
        $("#json").show();
        let latlng = new google.maps.LatLng(data.latitude, data.longitude)
        map.panTo(latlng);
        map.setZoom(6);
        let marker = new google.maps.Marker({
          position: latlng,
          map: map
        });

        var infoHTML = '';
        for (var key in data) {
          infoHTML += '<p>' + key + ': ' + data[key] + '</p>';
        }
        $('#ipInfo').html(infoHTML);
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.log('getJSON request failed! ' + textStatus);
        console.log("incoming " + jqXHR.responseText);
      });
  });
});

function initMap() {
  $("#map").height(window.innerHeight);
  var centerUS = {
    lat: 39.50,
    lng: -98.35
  };
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: centerUS
  });
}
