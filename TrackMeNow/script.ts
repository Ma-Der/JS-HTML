
const onBtn = document.getElementById('onBtn') as HTMLElement;
const offBtn = document.getElementById('offBtn') as HTMLElement;
const startData = document.getElementById('start-data') as HTMLElement;
const startCoordinates = document.getElementById('start-coordinates') as HTMLElement;
const currentData = document.getElementById('current-data') as HTMLElement;
const currentCoordinates = document.getElementById('current-coordinates') as HTMLElement;

class InitMap {
  map: google.maps.Map;
  infoWindow: google.maps.InfoWindow;
  watch: number;
  startPosition: {lat: number, lng: number};
  startTime: Date;
  currentPosition: {lat: number, lng: number};
  currentTime: string;
  
  constructor(map: google.maps.Map) {
    this.map = map;
    this.infoWindow = new google.maps.InfoWindow();
    this.watch = 0;
    this.startPosition = {lat: 0, lng: 0};
    this.startTime = new Date();
    this.currentPosition = {lat: 0, lng: 0};
    this.currentTime = '';
    this.getStartLocation();
    
  }

  setStartPosition(start: {lat: number, lng: number}) {
    return this.startPosition = start;
  }
  getStartPosition() {
    return this.startPosition;
  }

  setCurrentPosition(currentPosition: {lat: number, lng: number}) {
    return this.currentPosition = currentPosition;
  }
  getCurrentPosition() {
    return this.currentPosition;
  }

  setCurrentTime(currentTime: string) {
    return this.currentTime = currentTime;
  }
  getCurrentTime() {
    return this.currentTime;
  }

  addMarker(options: google.maps.MarkerOptions): google.maps.Marker {
    const marker = new google.maps.Marker(options);
    return marker;
  }

  getStartLocation() {
    const setStart = (strt: {lat: number, lng: number}) => this.setStartPosition(strt);
    if(!navigator.geolocation) throw new Error("Unable to detect navigator.geolocation");
    navigator.geolocation.getCurrentPosition((position) => {
      const startPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.infoWindow.open(this.map);
      this.map.setCenter(startPos);
      this.addMarker({position: startPos, map: this.map, label: 'Start'});
      setStart(startPos)
      //this.setStartPosition({lat: 8, lng: 9}); 
    }, () => this.handleLocationError(true, this.infoWindow, this.map.getCenter()));    
  }

  geoOn() {
    if (navigator.geolocation) {
      this.watch = navigator.geolocation.watchPosition((position) => { 
        const currentPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        const currMark = this.addMarker({position: currentPosition, map: this.map, label: 'Cur'});
        this.infoWindow.open(this.map);
        currMark.setPosition(new google.maps.LatLng(currentPosition))
        this.map.panTo(currentPosition);
        this.setCurrentPosition(currentPosition);
        this.setCurrentTime(new Date(position.timestamp).toString());
    });
    } else {
        this.handleLocationError(false, this.infoWindow, this.map.getCenter());
    }
  }

  geoOff(): void {
    navigator.geolocation.clearWatch(this.watch);
  }

  handleLocationError(browserHasGeolocation: boolean, infoWindow: google.maps.InfoWindow, pos: google.maps.LatLng) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(this.map);
  }
}
/*
if(!(/Mobi|Android/i.test(navigator.userAgent))){
  document.getElementById('notMobile')?.classList.remove('not-visible');
  document.getElementById('notMobile')?.classList.add('warn-page');
}
*/
const mapEl = document.getElementById("map") as HTMLElement;
const options = {
  zoom: 8
}
const map = new google.maps.Map(mapEl, options);
const init = new InitMap(map);
window.addEventListener('DOMContentLoaded', () => {
  startData.innerHTML = init.startTime.toString();
  startCoordinates.innerHTML = JSON.stringify(init.getStartPosition());
})



onBtn.addEventListener('click', () => {
  init.geoOn();
  currentData.innerHTML = init.getCurrentTime();
  currentCoordinates.innerHTML = JSON.stringify(init.getCurrentPosition());
});
offBtn.addEventListener('click', () => {
  init.geoOff();
});



