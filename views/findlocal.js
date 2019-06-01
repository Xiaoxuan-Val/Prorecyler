var lat = document.getElementById("lat-input");
var lng = document.getElementById("lng-input");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    console.log("Geolocation is not supported by this browser.");
}

function showPosition(position) {
    lat.value = position.coords.latitude;
    lng.value = position.coords.longitude;
}