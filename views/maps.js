// Copy from google map API tutorial
// https://developers.google.com/maps/documentation/javascript/geolocation

// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

var map, infoWindow;
window.initMap = () => {
    map = new google.maps.Map(document.getElementById('map'), {
        // location of University of Melbourne
        center: { lat: -37.7966434, lng: 144.9610147 },
        zoom: 15
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }

    // add markers
    var url = '/bins';

    var request = new XMLHttpRequest();

    request.open('GET', url);

    request.responseType = 'text';

    request.onload = () => { 
        if (request.readyState == request.DONE && request.status == 200) { 
            var bins = JSON.parse(request.responseText);

            var i;
            for (i = 0; i < bins.length; i++) {
                var pos = { lat: bins[i].location[0], lng: bins[i].location[1] };
                // var infocontent = '<p><b>Type: </b>' + bins[i].type + '</p>';
                var marker = new google.maps.Marker({
                    position: pos,
                    map: map
                });
                // var infowindow = new google.maps.InfoWindow({
                //     content: infocontent
                // });
                // marker.addListener('click', () => { 
                //     infowindow.open(map, marker);
                // });
            }
        }
    }

    request.send();
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}