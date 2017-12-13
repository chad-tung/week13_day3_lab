var bucketListView = function(countries){
  this.render(countries)
};

bucketListView.prototype = {
  render: function(countries) {
  countries.forEach(function(country){
    var ul = document.getElementById('bucket-list')
    var li = document.createElement('li');
    var nameP = document.createElement('p');
      nameP.innerText = country.name;
      li.appendChild(nameP);
    var capitalP = document.createElement('p');
      capitalP.innerText = country.capital;
      li.appendChild(capitalP);
    var regionP= document.createElement('p');
      regionP.innerText = country.region;
      li.appendChild(regionP);

      ul.appendChild(li);
    })
  }
};


module.exports = bucketListView;
