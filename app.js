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

var url = process.env.MONGOLAB_URI || 'mongodb://localhost/MyDataBase';

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


app.use('/', function(req,res) {
	res.sendFile(__dirname + '/views/register.html');
});

app.post('/login', passport.authenticate('local', {successRedirect: '/main', failureRedirect: '/login?failed=true' }));

app.post('/register', function(req,res) {
	Account.register(new Account({username: req.body.username}), req.body.password, function(err, user) {
		if (err) {
			console.log(err);
			res.render('register', {taken: true});
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



module.exports = app;
