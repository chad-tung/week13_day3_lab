var CountryDropdownView = require('./views/countryDropdownView');
var BucketListView = require('./views/bucketListView');

var app = function() {
	var url = "https://restcountries.eu/rest/v2/all";
	// var countries = new CountryDropdownView("Hiya");
	populateBucket();
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
	listenSelect(countries);
}

var listenSelect = function(countries) {
	var select = document.getElementById('country-selector');
	var form = document.getElementById('country-form');

	select.addEventListener('change', function() {
		var country = countries[select.selectedIndex - 1];
		form.action = `/add_country/${country.name}/${country.capital}/${country.region}/${country.latlng[0]}/${country.latlng[1]}`;
	})
}

var populateBucket = function() {
	var url = "/countries"
	makeRequest(url, function() {
		if (this.status !== 200) return;
		var countries = JSON.parse(this.responseText);
		var ui = new BucketListView(countries);
	})
}






window.addEventListener("load", app);
