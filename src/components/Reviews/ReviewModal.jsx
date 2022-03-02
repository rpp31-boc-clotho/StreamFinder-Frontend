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
      message: '',
      displayError: false
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
      userProfilePhoto: this.props.avatar
    }

    if (this.state.recommend !== '' && this.state.message.length > 1) {
    axios({
      method: 'post',
      url: 'https://api.youpostalservice.com/homepage/review/create',
      data: data,
    })
      .then((response) => {
        this.props.getReviews()
      })
      .catch((e) => {
        console.log('Error posting review:', e)
      })
      this.props.close();
      this.setState({
        recommend: '',
        message: '',
        displayError: false
      })
    } else {
      this.setState({
        displayError: true
      })
    }
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

  exit() {
    this.props.close()
    this.setState({
      recommend: '',
      message: '',
      displayError: false
    })
  }

  render() {
    const thumbsUpStyle = this.state.recommend ? { background: 'lightgray' } : { background: 'none' }
    const thumbsDownStyle = this.state.recommend === '' || this.state.recommend ? { background: 'none' } : { background: 'lightgray' }
    if (this.props.open) {
      return (
        <div className='reviewModal'>
          <form className='reviewForm' onSubmit={(e) => { this.handleSubmit(e); }}>
            <section className='closeModal' onClick={this.exit.bind(this)}>X</section>
            <h2 className='modalTitle'>Submit a Review!</h2>
            <Button onClick={this.thumbsUp.bind(this)} style={thumbsUpStyle}><ThumbUpIcon /></Button>
            <Button onClick={this.thumbsDown.bind(this)} style={thumbsDownStyle}><ThumbDownIcon /></Button>
            <section className="addReviewSummary">
              <section>
                <textarea rows="6" name='reviewContent' placeholder="type here" onChange={e => this.setMessage(e.target.value)} ></textarea>
              </section>
            </section>
            <button >Submit</button>
            {this.state.displayError ? (<div>please fill all fields</div>) : null}
          </form>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default ReviewModal;