require('dotenv').config({path: '../.env'});
const express = require("express");
const app = express();
const PORT = process.env.PORT;

// Serve static files from the 'public' folder
app.use(express.static('../public'));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
