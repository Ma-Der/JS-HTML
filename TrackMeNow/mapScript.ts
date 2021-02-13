/*

let onBtn = document.getElementById('onBtn') as HTMLElement;
const offBtn = document.getElementById('offBtn') as HTMLElement;
const startData = document.getElementById('start-data') as HTMLElement;
const startCoordinates = document.getElementById('start-coordinates') as HTMLElement;
const currentData = document.getElementById('current-data') as HTMLElement;
const currentCoordinates = document.getElementById('current-coordinates') as HTMLElement;

let map: google.maps.Map, infoWindow: google.maps.InfoWindow, watch: number;

function addMarker(options: google.maps.MarkerOptions) {
  const marker = new google.maps.Marker(options);
  return marker;
}

function getStartLocation(infoWindow: google.maps.InfoWindow, map: google.maps.Map) {
  if(!navigator.geolocation) throw new Error('Unable to detect navigator.geolocation.');
  navigator.geolocation.getCurrentPosition((position) => {
    const pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    startData.innerHTML = new Date(position.timestamp).toString();
    startCoordinates.innerHTML = JSON.stringify(pos);

    infoWindow.open(map);
    map.setCenter(pos);
    addMarker({position: pos, map: map, label: 'Start'});
  }, () => handleLocationError(true, infoWindow, map.getCenter()));
}

function geoOn(map: google.maps.Map, infoWindow: google.maps.InfoWindow) {
  if (navigator.geolocation) {
    watch = navigator.geolocation.watchPosition((position) => { 
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      const currMark = addMarker({position: pos, map: map, label: 'Cur'});
      infoWindow.open(map);
      currMark.setPosition(new google.maps.LatLng(pos))
      map.panTo(pos);
      currentData.innerHTML = new Date(position.timestamp).toString();
      currentCoordinates.innerHTML = JSON.stringify(pos);
  });
  } else {
      handleLocationError(false, infoWindow, map.getCenter());
  }
}

function geoOff() {
  navigator.geolocation.clearWatch(watch);
}

function handleLocationError(browserHasGeolocation: boolean, infoWindow: google.maps.InfoWindow, pos: google.maps.LatLng) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 53, lng: 24 },
    zoom: 15,
  });
  infoWindow = new google.maps.InfoWindow();

  getStartLocation(infoWindow, map);

  onBtn.addEventListener('click', () => geoOn(map, infoWindow));
  offBtn.addEventListener('click', () => geoOff());
}

*/