import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Button from '@material-ui/core/Button';
import axios from 'axios';


class ReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommend: '',
      message: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
// need to add picture prop to send
//need to ensure user fills all forms.
//display log in to submit a review?


    let data = {
      username: this.props.email,
      contentType: this.props.type,
      contentId: Number(this.props.id),
      recommend: this.state.recommend,
      reviewContent: this.state.message,
      // picture: this.props.picture
    }

    axios({
      method: 'post',
      url: 'https://api.youpostalservice.com/homepage/review/create',
      data: data,
    })
      .then((response) => {
        console.log('success')
        this.props.getReviews()
      })
      .catch((e) => {
        console.log('Error posting review:', e)
      })

    this.props.close();
  }

  setMessage(e) {
    this.setState({
      message: e
    })
  }

  thumbsUp() {
    this.state.recommend === '' ?
      this.setState({
        recommend: true
      }) :
      this.setState({
        recommend: !this.state.recommend
      })
  }

  thumbsDown() {
    this.state.recommend === '' ?
      this.setState({
        recommend: false
      }) :
      this.setState({
        recommend: !this.state.recommend
      })
  }

  render() {
    const thumbsUpStyle = this.state.recommend ? { background: 'lightgray' } : { background: 'none' }
    const thumbsDownStyle = this.state.recommend === '' || this.state.recommend ? { background: 'none' } : { background: 'lightgray' }
    if (this.props.open) {
      return (
        <div className='reviewModal'>
          <form className='reviewForm' onSubmit={(e) => { this.handleSubmit(e); }}>
            <section className='closeModal' onClick={this.props.close}>X</section>
            <h2 className='modalTitle'>Submit a Review!</h2>
            <Button onClick={this.thumbsUp.bind(this)} style={thumbsUpStyle}><ThumbUpIcon /></Button>
            <Button onClick={this.thumbsDown.bind(this)} style={thumbsDownStyle}><ThumbDownIcon /></Button>
            <section className="addReviewSummary">
              <section>
                <textarea name='reviewContent' placeholder="type here" onChange={e => this.setMessage(e.target.value)}></textarea>
              </section>
            </section>
            <button >Submit</button>
          </form>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default ReviewModal;