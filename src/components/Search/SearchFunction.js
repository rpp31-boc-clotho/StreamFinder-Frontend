const axios = require("axios").default

//search function

//do i need async and await for this?

let searchFunction = (mediaType, searchTerm) => {
  let searched = {
    method: 'GET',
    url: `http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/search/${mediaType}?media=${searchTerm}`,
    headers: {
      //currently empty, not needed
    }
  }
  return axios.request(searched)
  .then((response) => {
    console.log("this is response.data" + JSON.stringify(response.data));
    return response.data;
  }).catch((err) => {
    throw err
  });
};

module.exports.searchFunction = searchFunction;