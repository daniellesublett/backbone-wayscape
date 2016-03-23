
/*global $ */
/*jshint unused:false */
var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;



$(function () {
	'use strict';

	// kick things off by creating the `App`
	new app.AppView();
});


// define(function(require){

// })



var express = require('express.js')
  , http = require(['http'])
  , mongoose = require(['mongoose'])
  , models = require(['/js/models/todo.js'])
  , routes = require(['/js/routers/router.js'])
  , connect = require(['/node_modules/connect'])
  , app = express();
   

 

app.configure(function () {
  // app.set('views', __dirname + '/views');
  // app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(express.static(__dirname + '/public'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.configure('development', function () {
  app.use(express.errorHandler());
});

routes.init(app);

mongoose.connect("127.0.0.1", "todomvc", 27017);

http.createServer(app).listen(3000);

console.log("Express server listening on port 3000");