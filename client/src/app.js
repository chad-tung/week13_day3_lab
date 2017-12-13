var CountryDropdownView = require('./views/countryDropdownView');

var app = function() {
	var countries = new CountryDropdownView("Hiya");
}

window.addEventListener("load", app);
