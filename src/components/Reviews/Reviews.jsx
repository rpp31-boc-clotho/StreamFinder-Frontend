import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
import axios from 'axios';
import exampleData from '../../../exampleData.js';


const getRecommended = (reviews) => {
  let numRecommend = 0;
  reviews.forEach((review) => {
    if (review.recommend) {
      numRecommend++
    }
  })
  return numRecommend;
}

const displayRecommended = (numRecommended) => {
  if (numRecommended === 1) {
    return numRecommended + ' person loves this movie!'
  } else {
    return numRecommended + ' people love this movie'
  }
}

const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);
  const [recommended, setRecommended] = useState(0)

  useEffect(() => {
    //need to add axios call to get api data
    axios.get('http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/user/homepage/review', {
      params: {
        contentType: props.type,
        contentId: props.id
      }
    })
    .then((res) => {
      console.log('RESPONSE', response)
    })
    .catch((e) => {
      console.log('Error fetching user data', e)
    })
    axios({
      method: 'get',
      url:'http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/review/',
      params: {
        contentType: props.type,
        contentId: props.id
      },
    })
    .then((response) => {
      console.log('RESPONSE', response)
      setRecommended(getRecommended(response.data));
      setReviews(response.data)
    })
    .catch((e) => {
      console.log('Error getting reviews:', e)
    })
  },[props.id]);

  return (
    <div className="reviewsWrapper">
      {console.log('reviewProps', props)}
      <div className='reviewHeader'>
        <div className='reviewTitle'>Reviews ({reviews.length})</div>
        <div className='recommendedReviews'>{displayRecommended(recommended)} </div>
      </div>
      <div className='reviewList'>
        {reviews.map((review, i) => {
          return (
            <Review review={review} key={i} />
          )
        })}
      </div>
    </div>
  );
};

export default Reviews;
