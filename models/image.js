var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MusicImage = new Schema({
	title: String,
	url: String, 
	uploader: String,
	likes: [String]
});

module.exports = mongoose.model("MusicImage", MusicImage);







