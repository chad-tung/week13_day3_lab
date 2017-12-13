var bucketListView = function(countries){
  this.render(countries)
};

bucketListView.prototype = {
  render: function(countries) {
  countries.forEach(function(country){
    var ul = document.getElementById('bucket-list')
    var li = document.createElement('li');
    var details = document.createElement('p');      
      details.innerText = country.name;
      li.appendChild(details);
      ul.appendChild(li);
    })
  }
};


module.exports = bucketListView;
