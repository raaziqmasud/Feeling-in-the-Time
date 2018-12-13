var express = require('express')
var app = express()
var cors = require('cors')
 
app.use(cors())

// Database to store data, don't forget autoload: true
var Datastore = require('nedb');
var db = new Datastore({filename: "data2.db", autoload: true});

app.use(express.static("."));

app.get('/data2', function (req, res) {
	// Find all of the existing docs in the database
	db.find({}, function(err, docs) {
		res.send(docs);
		// // Loop through the results, send each one as if it were a new chat message
		// for (var i = 0; i < docs.length; i++) {
		// 	console.log(docs[i].name + " " + docs[i].message);
		// }
	});
})

app.get('/save', function (req, res) {
	var datatosave = req.query.datatosave;
	console.log("saving: " + datatosave);
	var thedata = {"data": datatosave};
// Insert the data into the database
	db.insert(thedata, function (err, newDocs) {
		console.log("err: " + err);
		console.log("newDocs: " + newDocs);
	});
	res.send("test");
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


// // Create a JavaScript Object with data to store
// var datatosave = {
// 	name: "Shawn",
// 	message: "Hello world"
// };
		


