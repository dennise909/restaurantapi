

let userId = 1;
let url = 'https://reqres.in/api/users?page=2'

console.log("loading");

axios.get(url)
  .then(function (response) {
    let json = response.data;
    console.log(json)
    let tableText = "";
    json.data.forEach((user) => {
      tableText += "<tr>";
      tableText += "<td>" + user.id + "</td>";
      tableText += "<td>" + user.email + "</td>";
      tableText += "<td>" + user.first_name + "</td>";
      tableText += "<td>" + user.last_name + "</td>";
      tableText += "</tr>";
      console.log(user);
    });

    document.getElementById('tablebodylol').innerHTML = tableText;
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 19.4960738, lng: -99.2002019 },
    zoom: 15
  });
  marker = new google.maps.Marker({
    position: { lat: 19.4968158, lng: -99.2007130 },
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    title: 'Hello World!'
  });
  marker.addListener('click', toggleBounce);
  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
}

var infoWindow = new google.maps.InfoWindow;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    infoWindow.setPosition(pos);
    infoWindow.setContent('Daniela is here');
    infoWindow.open(map);
    map.setCenter(pos);
  }, function () {
    handleLocationError(true, infoWindow, map.getCenter());
  });
} else {
  // Browser doesn't support Geolocation
  handleLocationError(false, infoWindow, map.getCenter());
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

let page = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+Sydney&key=AIzaSyBFI3o6WNGKZErNzLDV_uJ3Ci7G7uIxAGk'
axios.get(page)
  .then(function (response) {
    let json = response;
    console.log(json)
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
let places = [
  {
    name: "Tacos el paisa",
    location: [19.4968158, -99.2007130],
    rating: 4.2,
    photos: [],
    description: "Deliciosos tacos de pastor, asada, chuleta y vegetarianos. Con diversas opciones de salsas"
  },
  {
    name: "Tortas el loro",
    location: [19.4971688, -99.1988667],
    rating: 3.2,
    photos: [],
    description: "Deliciosos tacos de pastor, asada, chuleta y vegetarianos. Con diversas opciones de salsas"
  },
  {
    name: "Carnitas el tio",
    location: [19.4946599, -99.1986569],
    rating: 4.7,
    photos: [],
    description: "Deliciosos tacos de pastor, asada, chuleta y vegetarianos. Con diversas opciones de salsas"
  },
  {
    name: "Tacos el gallo",
    location: [19.4936983, -99.2016597],
    rating: 4.9,
    photos: [],
    description: "Deliciosos tacos de pastor, asada, chuleta y vegetarianos. Con diversas opciones de salsas"

  },
  {
    name: 'Fonda "La Doña"',
    location: [19.4949635, -99.2038869],
    rating: 3.9,
    photos: [],
    description: "Deliciosos tacos de pastor, asada, chuleta y vegetarianos. Con diversas opciones de salsas"

  }
];

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 16,
  center: new google.maps.LatLng(19.4960738, -99.2002019),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < places.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(places[i].location[0], places[i].location[1]),
    map: map
  });

  google.maps.event.addListener(marker, 'click', (function (marker, i) {
    return function () {
      infowindow.setContent(places[i].name);
      infowindow.open(map, marker);
    }
  })(marker, i));
}

let cardsTitle = $(".card-title")
    cardsText = $(".card-text")



  for (i = 0; i < cardsTitle.length; i++) {
    $(cardsTitle[i]).html(places[i].name)
    $(cardsText[i]).html(places[i].description) 
}



//initMap();
//handleLocationError();