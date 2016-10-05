var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var app = express();
var Account = require('./models/account.js');
var Image = require('./models/image.js');

var port = process.env.PORT || 8080;
var url = process.env.MONGOLAB_URI || 'mongodb://localhost/MyDataBase';

mongoose.connect(url);

//app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');

app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use('/public', express.static(path.join(__dirname, 'public')));

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
	secret:'topSecret',
	resave:'false',
	saveUninitialized:'false'
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy('local', Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());


app.get('/', function(req,res) {
	res.sendFile(__dirname + '/views/main.html');
});

app.get('/recent', function(req,res) { //for the recent images route
	res.sendFile(__dirname + '/views/main.html');
});

app.get('/top', function(req,res) { //for the top images route
	res.sendFile(__dirname + '/views/main.html');
});

app.get('/own', function(req,res) {
	res.sendFile(__dirname + '/views/main.html'); //for the own images route 
});

app.get('/login', function(req,res) {
	res.sendFile(__dirname + '/views/register.html');
});

app.post('/login', passport.authenticate('local', {successRedirect: '/', failureRedirect: '/register?failed=true' }));

app.get('/register', function(req,res) {
	res.sendFile(__dirname + '/views/register.html');
});

app.post('/register', function(req,res) {
	Account.register(new Account({username: req.body.username}), req.body.password, function(err, user) {
		if (err) {
			console.log(err);
			res.redirect('/register?fail=true');
		}
		else {
			req.login(user, function(err) {
				if (err) {
					console.log(err);
				}
				else {
					res.redirect('/');
				}
			});
		}
		
	});
	
	
});

app.get('/getUsername', function(req,res) { //handle request to get username 
	if (req.user) {
		var obj = { username: req.user.username };
		res.end(JSON.stringify(obj));
	}
	else {
		var obj = { username: '!none'};
		res.end(JSON.stringify(obj));
	}
	
});

app.get('/getRecent', function(req,res) { //handle request to get recently uploaded image list 
	Image.find({},{},{ sort:{ _id: -1 }, limit:20},function(err,images) {
		if (err) {
			console.log(err);
		}
		else {
			res.end(JSON.stringify({ imageArr: images }));
		}
		
		
	});
	
});

app.get('/getTop', function(req,res) { //handle request to get most liked images
	Image.find({},{},{ sort:{ likes: -1 }, limit:20},function(err,images) {
		if (err) {
			console.log(err);
		}
		else {
			res.end(JSON.stringify({ imageArr: images }));
		}
		
		
	});
	
});

app.get('/getOwn', function(req,res) { //handle request to get user's personal gallery
	if (req.user) {
		Image.find({uploader:req.user.username},{},{ sort:{ _id: 1 }, limit:20},function(err,images) {
			if (err) {
				console.log(err);
			}
			else {
				res.end(JSON.stringify({ imageArr: images }));
			}
			
			
		});
	}
	else {
		res.end(JSON.stringify({ imageArr: [] }));
	}
	
});

app.post('/addImage', function(req,res) { //handle post request for uploading new image 
	if (req.user) {
		Account.findOne({username:req.user.username}, function(err,user) {
			if (err) {
				console.log(err);
			}
			else {
				var obj = {title: req.body.title, url: req.body.url, uploader:req.user.username, likes:[] };
				user.images.push(obj);
				user.save();
				var newImage = new Image(obj);
				newImage.save(function(err, doc) {
					if (err) {
						console.log(err);
					}
					else {
						res.end(JSON.stringify(obj));
					}
				});
			}
		});
		
		
	
	}
	else {
		var obj = { title: 'Not logged in!' };
		res.end(JSON.stringify(obj));
	}
	
});

app.post('/likeImage', function(req,res) { //handle like image requests
	if (req.user) {
		Image.findOne({_id: req.body._id}, function(err,theImage) {
			if (err) {
				console.log(err);
			}
			else {
				theImage.likes.push(req.user.username);
				theImage.save();
				
				Account.findOne({username: req.user.username}, function(err, user) {
					if (err) {
						console.log(err);
					}
					else {
						user.likedImages.push(theImage.toJSON()); 
						user.save();
						res.end(JSON.stringify({ data: 'success'}));
					}
				});
			}
		});
		
	}
	
});

app.post('/unlikeImage', function(req,res) { //handle request to unlike image
	if (req.user) {
		Image.findOne({_id: req.body._id}, function(err,theImage) {
			if (err) {
				console.log(err);
			}
			else {
				var index = theImage.likes.indexOf(req.user.username);
				theImage.likes.splice(index,1);
				theImage.save();
				
				Account.findOne({username: req.user.username}, function(err, user) {
					if (err) {
						console.log(err);
					}
					else {
						var obj = theImage.toJSON();
						for (var i=0; i<user.likedImages.length; i++) {
							if (user.likedImages[i]._id == theImage._id) {
								index = i;
							} 
						}
						user.likedImages.splice(index,1);
						user.save();
						res.end(JSON.stringify({ data: 'success'}));
					}
				});
			}
		});
		
	}
});



app.listen(port, function(err) {
	if (err) {
		console.log(err);
	}
	else {
		console.log("Now listening on port " + port);
	}
});