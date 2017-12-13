var CountryDropdownView = function(countries) {
  this.render(countries);
}

CountryDropdownView.prototype = {
  render: function(countries) {
    console.log(countries);
  }
}

module.exports = CountryDropdownView;
