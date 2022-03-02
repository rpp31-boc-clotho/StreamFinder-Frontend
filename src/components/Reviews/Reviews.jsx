import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
import ReviewModal from './ReviewModal.jsx';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import axios from 'axios';
import exampleData from '../../../exampleData.js';

const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);
  const [recommended, setRecommended] = useState(0);
  const [modal, setModal] = useState(false);

  const getReviews = () => {
    axios({
      method: 'get',
      url: 'https://api.youpostalservice.com/homepage/review/',
      params: {
        contentType: props.type,
        contentId: props.id
      },
    })
      .then((response) => {
        setRecommended(getRecommended(response.data));
        setReviews(response.data)
      })
      .catch((e) => {
        console.log('Error getting reviews:', e)
      })
  }

  const getRecommended = (reviews) => {
    let numRecommend = 0;
    reviews.forEach((review) => {
      if (review.recommend) {
        numRecommend++
      }
    })
    return numRecommend;
  }

  const displayLikes = (likes, mediaType) => {
    if (likes === 0) {
      return null;
    } else if (likes === 1) {
      return <div className='likes'> {likes} person likes this {mediaType}!
      <ThumbUpIcon style={{'font-size': '18px', 'margin-left': '5px'}} />
      </div>
    } else {
      return <div className='likes'> {likes} people like this {mediaType}!
      <ThumbUpIcon style={{'font-size': '18px', 'margin-left': '5px'}} />
      </div>
    }
  }

  const displayDislikes = (likes, mediaType) => {
    let dislikes = reviews.length - likes;

    if (dislikes === 0) {
      return null;
    } else if (dislikes === 1) {
      return <div className='dislikes'>
       <ThumbDownIcon style={{'font-size': '18px', 'margin': '0px 5px 0px 5px'}} />
      {dislikes} person dislikes this {mediaType}!
      </div>
    } else {
      return <div className='dislikes'>
       <ThumbDownIcon style={{'font-size': '18px', 'margin': '0px 5px 0px 5px'}} />
      {dislikes} people dislike this {mediaType}!
      </div>
    }
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
      <div className='infoTitle'> Additional Information</div>
      <div className='reviewHeader' >
        <div className='reviewTitle'> Reviews ({reviews.length})</div>
        <div className='reviewLikesWrapper'>
          <div className='reviewLikes' >
          {displayLikes(recommended, props.type)}
          {displayDislikes(recommended, props.type)}
          </div>
        </div>
      </div>
      <div className='reviewList'>
        {reviews.map((review, i) => {
          return (
            <Review review={review} key={i} username={props.username} picture={props.picture} />
          )
        })}
      </div>
      {displayButton()}
      <ReviewModal close={closeModal.bind(this)} open={modal} id={props.id} type={props.type} email={props.email} getReviews={getReviews.bind(this)} />
    </div>
  );
};

export default Reviews;
