import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Button from '@material-ui/core/Button';
import axios from 'axios';


class ReviewModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        recommend: '',
        message:''
      }
    }

    handleSubmit(e) {
      e.preventDefault();

      let data = {
        username: this.props.email,
        contentType: this.props.type,
        contentId: Number(this.props.id),
        recommend: this.state.recommend,
        reviewContent: this.state.message
      }


      axios({
        method: 'post',
        url:'http://boc-backend-alb-1007494829.us-east-2.elb.amazonaws.com/homepage/review/create',
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

    thumbsUp(){
      this.setState({
        recommend: true
      })
    }

    thumbsDown(){
      this.setState({
        recommend: 'false'
      })
    }


  render() {
    if (this.props.open) {
      return (
        <div className='reviewModal'>
          <form className='reviewForm' onSubmit={(e) => { this.handleSubmit(e); }}>
            <section className='closeModal' onClick={this.props.close}>X</section>
            <h2 className='modalTitle'>Submit a Review!</h2>
            <Button onClick={this.thumbsUp.bind(this)}><ThumbUpIcon /></Button>
            <Button onClick={this.thumbsDown.bind(this)}><ThumbDownIcon /></Button>
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