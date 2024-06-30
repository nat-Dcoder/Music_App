require('dotenv').config({path: ".env"});
const express = require( "express");
const PORT = process.env.PORT;
require('./APIs/api')
const app = express();
const path = require("path");

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);

// Provide the window to jQuery so it can use it as the global window
const $ = require('jquery')(window); 

(async function () {
  // Serving static files from the 'public' folder
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });

  app.use(express.static(path.join(__dirname, 'public')));

  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
  });
  
})();


 