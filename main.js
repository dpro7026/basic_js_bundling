// browserify main.js -o bundle.js

// require module
var welcome = require('./welcome');
var name = "David";

welcome.call(this, name);
