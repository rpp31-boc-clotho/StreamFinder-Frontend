const express = require('express');
const axios = require('axios');
const path = require("path");

let app = express();
let PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))