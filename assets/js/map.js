
var map;

var latLng = {lat: 52.596540, lng: -1.211020};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: latLng,
    zoom: 14,
    disableDefaultUI: true,
    styles: [
     {
       "elementType": "geometry",
       "stylers": [
         {
           "color": "#191B1E"
         }
       ]
     },
     {
       "elementType": "labels.icon",
       "stylers": [
         {
           "visibility": "off"
         }
       ]
     },
     {
       "elementType": "labels.text.fill",
       "stylers": [
         {
           "color": "#757575"
         }
       ]
     },
     {
       "elementType": "labels.text.stroke",
       "stylers": [
         {
           "color": "#212121"
         }
       ]
     },
     {
       "featureType": "administrative",
       "elementType": "geometry",
       "stylers": [
         {
           "color": "#757575"
         }
       ]
     },
     {
       "featureType": "administrative.country",
       "elementType": "labels.text.fill",
       "stylers": [
         {
           "color": "#9e9e9e"
         }
       ]
     },
     {
       "featureType": "administrative.land_parcel",
       "stylers": [
         {
           "visibility": "off"
         }
       ]
     },
     {
       "featureType": "administrative.locality",
       "elementType": "labels.text.fill",
       "stylers": [
         {
           "color": "#bdbdbd"
         }
       ]
     },
     {
       "featureType": "poi",
       "elementType": "labels.text.fill",
       "stylers": [
         {
           "color": "#757575"
         }
       ]
     },
     {
       "featureType": "poi.park",
       "elementType": "geometry",
       "stylers": [
         {
           "color": "#181818"
         }
       ]
     },
     {
       "featureType": "poi.park",
       "elementType": "labels.text.fill",
       "stylers": [
         {
           "color": "#616161"
         }
       ]
     },
     {
       "featureType": "poi.park",
       "elementType": "labels.text.stroke",
       "stylers": [
         {
           "color": "#1b1b1b"
         }
       ]
     },
     {
       "featureType": "road",
       "elementType": "geometry.fill",
       "stylers": [
         {
           "color": "#2c2c2c"
         }
       ]
     },
     {
       "featureType": "road",
       "elementType": "labels.text.fill",
       "stylers": [
         {
           "color": "#8a8a8a"
         }
       ]
     },
     {
       "featureType": "road.arterial",
       "elementType": "geometry",
       "stylers": [
         {
           "color": "#373737"
         }
       ]
     },
     {
       "featureType": "road.highway",
       "elementType": "geometry",
       "stylers": [
         {
           "color": "#3c3c3c"
         }
       ]
     },
     {
       "featureType": "road.highway.controlled_access",
       "elementType": "geometry",
       "stylers": [
         {
           "color": "#4e4e4e"
         }
       ]
     },
     {
       "featureType": "road.local",
       "elementType": "labels.text.fill",
       "stylers": [
         {
           "color": "#616161"
         }
       ]
     },
     {
       "featureType": "transit",
       "elementType": "labels.text.fill",
       "stylers": [
         {
           "color": "#757575"
         }
       ]
     },
     {
       "featureType": "water",
       "elementType": "geometry",
       "stylers": [
         {
           "color": "#000000"
         }
       ]
     },
     {
       "featureType": "water",
       "elementType": "labels.text.fill",
       "stylers": [
         {
           "color": "#3d3d3d"
         }
       ]
     }
   ]
  });
  var marker = new google.maps.Marker({
   position: latLng,
   map: map,
   title: '247 Time',
   icon: "./assets/images/map-marker.png"
 });
}
