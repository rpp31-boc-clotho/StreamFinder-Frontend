import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  constructor(props) {
    super(props)
  }

  displayRating(rating) {
    //accounted for ratings of 0 in the render function
    let ratingPercent = parseInt(rating * 10)
    if (ratingPercent >= 75) {
      return  <section className="filmRating" style={{ background: 'rgb(14, 179, 14)' }}>{ratingPercent + '%'}</section>
    } else if (ratingPercent <= 74 && ratingPercent >= 50) {
      return  <section className="filmRating" style={{ background: 'rgb(245, 159, 0)' }}>{ratingPercent + '%'}</section>
    } else {
      return  <section className="filmRating" style={{ background: 'red' }}>{ratingPercent + '%'}</section>
    }
  }

  displayDate () {
    //added one more condition to make it work for data from backend, as well as check to see if the property was present in the data
    if (this.props.film.release_date){
      return (this.props.film.release_date.substring(0,4))
    }
  }

  displayImage () {
    //added for backend data and accounted for brooken links
    let url ="";
    if(this.props.film.poster_path) {
      url = ('https://image.tmdb.org/t/p/w185' + (this.props.film.poster_path))
    } else {
      if (this.props.film.imgUrl.includes('null')) {
        return (<img src= '/questionMark.jpg' className="cardImage"></img>)
      } else {
        url = this.props.film.imgUrl;
      }
    }

    return (<img src={url} className="cardImage"></img>)
  }

  makeURL(film) {
    if (film.mediaType) {
      return '/info/' + film.mediaType + '/' + film.id
    } else {
      return '/info/' + film.media_type + '/' + film.id
    }
  }

  render() {
    //console.log("film", this.props.film);
    return (
      <div className="filmCard">
        <Link className="cardLink" to={this.makeURL(this.props.film)}>
          <section className='cardImgWrapper'>
        {this.displayImage()}
          </section>
        {this.displayRating(this.props.film.rating!== undefined ? this.props.film.rating : this.props.film.vote_average)}
        <section className="filmTitle">
          {this.props.film.name || this.props.film.title}
          </section>
        <section className="filmDate">
          {this.displayDate()}
        </section>
        </Link>
      </div>
    )
  }
}

export default MovieCard;