"use strict";

require('dotenv').config({
  path: ".env"
});

var express = require("express");

var PORT = process.env.PORT;

require('./APIs/api');

var app = express();

var path = require("path");

var jsdom = require("jsdom");

var JSDOM = jsdom.JSDOM;

var _ref = new JSDOM("<!DOCTYPE html><html><body></body></html>"),
    window = _ref.window; // Provide the window to jQuery so it can use it as the global window


var $ = require('jquery')(window);

(function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // Serving static files from the 'public' folder
          app.get('/', function (req, res) {
            res.sendFile(__dirname + '/public/index.html');
          });
          app.use(express["static"](path.join(__dirname, 'public')));
          app.listen(PORT, function () {
            console.log("Example app listening on port ".concat(PORT, "!"));
          });

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
})();