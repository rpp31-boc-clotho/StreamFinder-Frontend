import React, { useState, useEffect } from 'react';

const convertDate = (date) => {
  var date = new Date(date).toDateString();
  var dateArr = date.split(' ');
  dateArr.shift();
  dateArr[1] = (Number(dateArr[1]) + 1) + ', ';
  return dateArr.join(' ');
};

const Review = (props) => {

  return (
    <div className="reviewContainer">
      <div className='reviewUsername'>{props.review.username.split("@")[0]}</div>
      <div className='reviewDate'>{convertDate(props.review.createdDate)}</div>
      <div className='reviewContent'>{props.review.reviewContent}</div>
    </div>
  );

};

export default Review;
