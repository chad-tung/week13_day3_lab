var CountryDropdownView = function(countries) {
  this.render(countries);
}

CountryDropdownView.prototype = {
  render: function(countries) {
    var select = document.getElementById("country-selector");
    countries.forEach(function(country) {
      var option = document.createElement('option');
      option.innerText = country.name;
      select.appendChild(option);
    })
  }
}

module.exports = CountryDropdownView;
