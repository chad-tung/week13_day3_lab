var express = require("express");
var parser = require("body-parser");
var app = express();
var path = require("path");
var ObjectId = require("mongodb").ObjectId;
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static("client/build"));

var MongoClient = require("mongodb").MongoClient;

MongoClient.connect('mongodb://localhost:27017/bucketlist', function(err, client) {
	if(err) {
		console.log(err);
	}
	db = client.db("bucketlist");
	console.log("Connected to database.");

	app.listen(3000, function() {
		console.log("Listening on port 3000");
	});
});

app.get("/", function(req, res){
	res.sendFile(__dirname + "/client/build/index.html");
});

app.get('/countries', function(req, res){
  db.collection("countries_to_visit").find().toArray(function(err, results) {
    if(err) {
      console.log(err);
    }
    res.json(results);
  });
})

app.post("/add_country/:country/:capital/:region/:lat/:lng/", function(req, res) {
	db.collection("countries_to_visit").save({name: req.params.country, capital: req.params.capital, region: req.params.region, latlng: [req.params.lat, req.params.lng]}, function(err, result) {
		if(err) {
			return console.log(err);
		}

		console.log("Saved to database.");
		res.redirect("/");
	})
})
