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

app.get('/recent', function(req,res) {
	res.sendFile(__dirname + '/views/main.html');
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

app.post('/addImage', function(req,res) { //handle post request for uploading new image 
	if (req.user) {
		Account.findOne({username:req.user.username}, function(err,user) {
			if (err) {
				console.log(err);
			}
			else {
				var obj = {title: req.body.title, url: req.body.url, uploader:req.user.username, likes:0 };
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





app.listen(port, function(err) {
	if (err) {
		console.log(err);
	}
	else {
		console.log("Now listening on port " + port);
	}
});