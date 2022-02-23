const express = require('express');
const axios = require('axios');
const path = require("path");
var bodyParser = require('body-parser')

let app = express();
let PORT = 3000;

app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get('/search', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get('/database', (req, res) => {
  console.log('database req', req)
  axios({
    method: 'get',
    url: 'http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/user',
    data: {
      username: user.email
    },
  })
  .then ((response) => {
    res.send(response)
  })

})

app.post('/database', (req, res) => {
  console.log('post server hit')
  axios({
    method: 'post',
    url: 'http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/user/create',
    data: {
      username: req.body.username
    },
  })
  .then ((response) => {
    console.log('endpoint post response', response)
    res.send(response)
  })
  .catch((e) => {
    console.log('ERROR', e)
  })
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))