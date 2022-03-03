const axios = require("axios").default

let searchFunction = (mediaType, searchTerm) => {
  let searched = {
    method: 'GET',
    url: `http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/search/${mediaType}?media=${searchTerm}`,
    headers: {}
  }
  return axios.request(searched)
  .then((response) => {
    return response.data;
  }).catch((err) => {
    throw err
  });
};

module.exports.searchFunction = searchFunction;