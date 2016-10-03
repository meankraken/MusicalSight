var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var MusicAccount = new Schema({
	username: String,
	password: String,
	images: [{ title:String, url:String, uploader:String, likes: Number }],
	likedImages: [{ title:String, url:String, uploader:String, likes: Number }]
	
});

MusicAccount.plugin(passportLocalMongoose);

module.exports = mongoose.model("MusicAccount", MusicAccount);







