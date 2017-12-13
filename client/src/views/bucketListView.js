
MapWrapper = require("/mapWrapper.js")

var bucketListView = function(countries){
  this.render(countries)
};

bucketListView.prototype = {
  render: function(countries) {
  countries.forEach(function(country){

    var ul = document.getElementById('bucket-list')
    var li = document.createElement('li');
    var center = {country.latlng[0], country.latlng[1]}
    var map = document.createElement("main-map")
    map = new MapWrapper(mapDiv, center, 2);
    mainMap.addMarker(center);
    var details = document.createElement('p');
      details.innerText = country.name;
      details.appendChild(map);
      li.appendChild(details);
    var nameP = document.createElement('p');
      nameP.innerText = country.name;
      li.appendChild(nameP);
    var capitalP = document.createElement(‘p’);
      capitalP.innerText = country.capital;
      li.appendChild(capitalP);
    var regionP= document.createElement(‘p’);
      regionP.innerText = country.region;
      li.appendChild(regionP);
      ul.appendChild(li);
    })
  }
};


module.exports = bucketListView;
