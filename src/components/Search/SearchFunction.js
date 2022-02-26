const axios = require("axios").default

//search function

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



  // let reviewsFunction = (contentType, contentId) => {
  //   let reviews = {
  //     method: 'GET',
  //     url: `http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/user/homepage/review/${contentType}?media=${contentid}`,
  //     headers: {
  //       //currently empty, not needed
  //     }
  //   }
  //   return axios.request(reviews)
  //   .then((response) => {
  //     console.log("this is response.data" + JSON.stringify(response.data));
  //     return response.data;
  //   }).catch((err) => {
  //     throw err
  //   });
  // };