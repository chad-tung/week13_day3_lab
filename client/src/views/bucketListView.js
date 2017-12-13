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
      ul.appendChild(li);
    })
  }
};


module.exports = bucketListView;
