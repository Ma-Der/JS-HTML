"use strict";
exports.__esModule = true;
var mql = window.matchMedia('(max-width: 1024px)');
var handleMediaChange = function (mediaQueryList) {
    if (mediaQueryList.matches) {
        console.log('Finally its mobile');
    }
    else {
        var warnPage = document.createElement('div');
        warnPage.classList.add('warn-page');
        warnPage.innerHTML = "<h1>It's for mobile devices and tablets only.</h1>";
        document.body.insertAdjacentElement('afterbegin', warnPage);
    }
};
mql.addListener(handleMediaChange);
handleMediaChange(mql);
var onBtn = document.getElementById('onBtn');
var offBtn = document.getElementById('offBtn');
var startData = document.getElementById('start-data');
var startCoordinates = document.getElementById('start-coordinates');
var currentData = document.getElementById('current-data');
var currentCoordinates = document.getElementById('current-coordinates');
var map, infoWindow, watch;
function addMarker(options) {
    var marker = new google.maps.Marker(options);
    return marker;
}
function getStartLocation(infoWindow, map) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        startData.innerHTML = new Date(position.timestamp).toString();
        startCoordinates.innerHTML = JSON.stringify(pos);
        infoWindow.open(map);
        map.setCenter(pos);
        addMarker({ position: pos, map: map, label: 'Start' });
    }, function () { return handleLocationError(true, infoWindow, map.getCenter()); });
}
function geoOn(map, infoWindow) {
    if (navigator.geolocation) {
        watch = navigator.geolocation.watchPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var currMark = addMarker({ position: pos, map: map, label: 'Cur' });
            infoWindow.open(map);
            currMark.setPosition(new google.maps.LatLng(pos));
            map.panTo(pos);
            currentData.innerHTML = new Date(position.timestamp).toString();
            currentCoordinates.innerHTML = JSON.stringify(pos);
        });
    }
    else {
        handleLocationError(false, infoWindow, map.getCenter());
    }
}
function geoOff() {
    navigator.geolocation.clearWatch(watch);
}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation.");
    infoWindow.open(map);
}
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 53, lng: 24 },
        zoom: 15
    });
    infoWindow = new google.maps.InfoWindow();
    getStartLocation(infoWindow, map);
    onBtn.addEventListener('click', function () { return geoOn(map, infoWindow); });
    offBtn.addEventListener('click', function () { return geoOff(); });
}
