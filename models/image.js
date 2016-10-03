var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MusicImage = new Schema({
	title: String,
	url: String, 
	uploader: String,
	likes: Number
});

module.exports = mongoose.model("MusicImage", MusicImage);







