var onBtn = document.getElementById('onBtn');
var offBtn = document.getElementById('offBtn');
var startData = document.getElementById('start-data');
var startCoordinates = document.getElementById('start-coordinates');
var currentData = document.getElementById('current-data');
var currentCoordinates = document.getElementById('current-coordinates');
var InitMap = /** @class */ (function () {
    function InitMap(map) {
        this.map = map;
        this.infoWindow = new google.maps.InfoWindow();
        this.watch = 0;
        this.startPosition = { lat: 0, lng: 0 };
        this.startTime = new Date();
        this.currentPosition = { lat: 0, lng: 0 };
        this.currentTime = '';
        this.getStartLocation();
    }
    InitMap.prototype.setStartPosition = function (start) {
        return this.startPosition = start;
    };
    InitMap.prototype.getStartPosition = function () {
        return this.startPosition;
    };
    InitMap.prototype.setCurrentPosition = function (currentPosition) {
        return this.currentPosition = currentPosition;
    };
    InitMap.prototype.getCurrentPosition = function () {
        return this.currentPosition;
    };
    InitMap.prototype.setCurrentTime = function (currentTime) {
        return this.currentTime = currentTime;
    };
    InitMap.prototype.getCurrentTime = function () {
        return this.currentTime;
    };
    InitMap.prototype.addMarker = function (options) {
        var marker = new google.maps.Marker(options);
        return marker;
    };
    InitMap.prototype.getStartLocation = function () {
        var _this = this;
        var setStart = function (strt) { return _this.setStartPosition(strt); };
        if (!navigator.geolocation)
            throw new Error("Unable to detect navigator.geolocation");
        navigator.geolocation.getCurrentPosition(function (position) {
            var startPos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            _this.infoWindow.open(_this.map);
            _this.map.setCenter(startPos);
            _this.addMarker({ position: startPos, map: _this.map, label: 'Start' });
            setStart(startPos);
            //this.setStartPosition({lat: 8, lng: 9}); 
        }, function () { return _this.handleLocationError(true, _this.infoWindow, _this.map.getCenter()); });
    };
    InitMap.prototype.geoOn = function () {
        var _this = this;
        if (navigator.geolocation) {
            this.watch = navigator.geolocation.watchPosition(function (position) {
                var currentPosition = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                var currMark = _this.addMarker({ position: currentPosition, map: _this.map, label: 'Cur' });
                _this.infoWindow.open(_this.map);
                currMark.setPosition(new google.maps.LatLng(currentPosition));
                _this.map.panTo(currentPosition);
                _this.setCurrentPosition(currentPosition);
                _this.setCurrentTime(new Date(position.timestamp).toString());
            });
        }
        else {
            this.handleLocationError(false, this.infoWindow, this.map.getCenter());
        }
    };
    InitMap.prototype.geoOff = function () {
        navigator.geolocation.clearWatch(this.watch);
    };
    InitMap.prototype.handleLocationError = function (browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation.");
        infoWindow.open(this.map);
    };
    return InitMap;
}());
/*
if(!(/Mobi|Android/i.test(navigator.userAgent))){
  document.getElementById('notMobile')?.classList.remove('not-visible');
  document.getElementById('notMobile')?.classList.add('warn-page');
}
*/
var mapEl = document.getElementById("map");
var options = {
    zoom: 8
};
var map = new google.maps.Map(mapEl, options);
var init = new InitMap(map);
window.addEventListener('DOMContentLoaded', function () {
    startData.innerHTML = init.startTime.toString();
    startCoordinates.innerHTML = JSON.stringify(init.getStartPosition());
});
onBtn.addEventListener('click', function () {
    init.geoOn();
    currentData.innerHTML = init.getCurrentTime();
    currentCoordinates.innerHTML = JSON.stringify(init.getCurrentPosition());
});
offBtn.addEventListener('click', function () {
    init.geoOff();
});
