// Copy from google map API tutorial
// https://developers.google.com/maps/documentation/javascript/geolocation

// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

var map, infoWindow;
function initMap() {
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

    // show markers
    map.data.loadGeoJson('https://api.jsonbin.io/b/5cd7408e4c004c0eb496cb48');

    // map.data.loadGeoJson(
    //     'https://storage.googleapis.com/mapsdevsite/json/google.json');

    // var url = '/bins';

    // var request = new XMLHttpRequest();

    // request.open('GET', url);

    // request.responseType = 'text';


    // Bin.find((err, bins) => {
    //     if (err) {
    //         res.sendStatus(404);
    //     } else {
    //         bins.forEach((bin) => {
    //             var marker = new google.maps.Marker({
    //                 position: {
    //                     lat: bin.coordinates.latitude,
    //                     lng: bin.coordinates.longitude
    //                 },
    //                 map: map
    //             });
    //             attachInfo(marker, bin.type);
    //         });
    //     }
    // });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

function attachInfo(marker, info) {
    var infowindow = new google.maps.InfoWindow({
        content: info
    });

    marker.addListener('click', () => {
        infowindow.open(marker.get('map'), marker);
    });
}