const express = require('express');
const parser = require('body-parser');
var compression = require('compression');
const app = express();
const port = 3000;

app.use(compression());
app.use(express.static(__dirname + '/../public'));
app.use(parser.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})