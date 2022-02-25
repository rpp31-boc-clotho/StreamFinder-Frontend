import React, { useState, useEffect } from 'react';

const convertDate = (date) => {
  var date = new Date(date).toDateString();
  var dateArr = date.split(' ');
  dateArr.shift();
  dateArr[1] = (Number(dateArr[1]) + 1) + ', ';
  return dateArr.join(' ');
};

const Review = (props) => {

  useEffect(() => {

  });

  return (
    <div className="reviewContainer">
      <div className='reviewUsername'>{props.review.username}</div>
      <div className='reviewDate'>{convertDate(props.review.date)}</div>
      <div className='reviewContent'>{props.review.reviewContent}</div>
    </div>
  );
};

export default Review;
