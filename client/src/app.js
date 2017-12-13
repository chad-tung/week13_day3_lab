var CountryDropdownView = require('./views/countryDropdownView');

var app = function() {
	var url = "https://restcountries.eu/rest/v2/all";
	// var countries = new CountryDropdownView("Hiya");
	makeRequest(url, requestComplete);
};

var makeRequest = function(url, callback) {
	var request = new XMLHttpRequest;
	request.open('GET', url);
	request.addEventListener('load', callback);
	request.send();
}

var requestComplete = function() {
	if (this.status !== 200) return;
	var jsonString = this.responseText;
	var countries = JSON.parse(jsonString);
	console.log(countries);
	var countryList = new CountryDropdownView(countries);

	var select = document.getElementById('country-selector');
	var form = document.getElementById('country-form');
	select.addEventListener('change', function() {
		form.action = "/add_country/" + select.value;
	})

}

window.addEventListener("load", app);
