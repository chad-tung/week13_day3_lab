/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var CountryDropdownView = __webpack_require__(1);
var BucketListView = __webpack_require__(2);

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
	listenSelect();
}

var listenSelect = function() {
	var select = document.getElementById('country-selector');
	var form = document.getElementById('country-form');
	select.addEventListener('change', function() {
		form.action = "/add_country/" + select.value;
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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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


/***/ }),
/* 2 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map