const express = require('express');
const axios = require('axios');
const path = require('path');

let app = express();
let PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// app.get('/info/*', async (req, res) => {
//   if (req.headers.referer !== undefined) {
//     let request = req.headers.referer.split('info/')[1].split('/');
//     console.log('requesting:', request);
//     console.log('...from:', path.join(__dirname, "public", "index.html"))
    // let testQuery = 'nothing yet';
    // axios.get( 'http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/movie/634649' )
    //   .then(data => {
    //     console.log('fetched data!', data.data);
    //     testQuery = data.data;
    //   })
    //   .catch(err => {
    //     console.log('error fetching data:', err);
    //   })
    // console.log('query result:', testQuery);
//   }

//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))