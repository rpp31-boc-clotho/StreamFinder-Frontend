import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
import ReviewModal from './ReviewModal.jsx';
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
  if (numRecommended === 0) {
   return null;
  } else if (numRecommended === 1) {
    return numRecommended + ' person loves this movie!';
  } else {
    return numRecommended + ' people love this movie';
  }
}

const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);
  const [recommended, setRecommended] = useState(0);
  const [modal, setModal] = useState(false);

  const getReviews = () => {
    axios({
      method: 'get',
      url:'https://api.youpostalservice.com/homepage/review/',
      params: {
        contentType: props.type,
        contentId: props.id
      },
    })
    .then((response) => {
      console.log("response.data for reviews: " + JSON.stringify(response.data));
      setRecommended(getRecommended(response.data));
      setReviews(response.data)
    })
    .catch((e) => {
      console.log('Error getting reviews:', e)
    })
  }

  const displayButton = () => {
    if (props.email) {
      return <button className='addReviewButton' onClick={openModal.bind(this)}>Add a Review +
      </button>
    } else {
      return null
    }
  }

  const openModal = () => {
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    getReviews()
  }, [props.id]);

  return (
    <div className="reviewsWrapper">
      <div className='reviewHeader'>
        <div className='reviewTitle'>Reviews ({reviews.length})</div>
        <div className='recommendedReviews'>{displayRecommended(recommended)} </div>
      </div>
      <div className='reviewList'>
        {reviews.map((review, i) => {
          return (
            <Review review={review} key={i} username={props.username} />
          )
        })}
      </div>
      {displayButton()}
      <ReviewModal close={closeModal.bind(this)} open={modal} id={props.id} type={props.type} email={props.email} getReviews={getReviews.bind(this)} />
    </div>
  );
};

export default Reviews;
