import React, { useState, useEffect } from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const convertDate = (date) => {
  var date = new Date(date).toDateString();
  var dateArr = date.split(' ');
  dateArr.shift();
  dateArr[1] = (Number(dateArr[1]) + 1) + ', ';
  return dateArr.join(' ');
};

const Review = (props) => {

  const displayThumbs = (recommend) => {
    if (recommend) {
      return <ThumbUpIcon style={{'fontSize': '12px', 'marginLeft': '10px'}}/>
    }
  }

  return (
    <div className="reviewContainer">
      {console.log(props.review)}
      <div className='reviewUsername'>
      {props.review.username.split("@")[0]}
      {displayThumbs(props.review.recommend)}
      </div>
      <div className='reviewDate'>{convertDate(props.review.createdDate)}</div>
      <div className="userInfo">
        <img src={props.review.userProfilePhoto} className="profilePic" />
        <div className='reviewBubble'>
          <div className='reviewContent'>{props.review.reviewContent}</div>
        </div>
      </div>
    </div>
  );

};

export default Review;
