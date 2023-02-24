
function iniciarMap(){
    var coord = {lat:-27.4520168 ,lng: -58.9732366};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}