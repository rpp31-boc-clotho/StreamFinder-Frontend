import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  constructor(props) {
    super(props)
  }

  displayRating(rating) {
    let ratingPercent = (rating * 10)
    if (ratingPercent >= 75) {
      return  <section className="filmRating" style={{ background: 'rgb(14, 179, 14)' }}>{ratingPercent + '%'}</section>
    } else if (ratingPercent <= 74 && ratingPercent >= 50) {
      return  <section className="filmRating" style={{ background: 'rgb(245, 159, 0)' }}>{ratingPercent + '%'}</section>
    } else {
      return  <section className="filmRating" style={{ background: 'red' }}>{ratingPercent + '%'}</section>
    }
  }

  displayDate () {
    if (this.props.film.media_type === 'movie') {
      return (this.props.film.release_date.substring(0,4))
    } else {
      return (this.props.film.first_air_date.substring(0,4))
    }
  }

  displayImage () {
    let url = ('https://image.tmdb.org/t/p/w185' + (this.props.film.poster_path))
    return (<img src={url} className="cardImage"></img>)
  }

  makeURL(film) {
    return '/info/' + film.media_type + '/' + film.id
  }

  render() {
    return (
      <div className="filmCard">
        <Link className="cardLink" to={this.makeURL(this.props.film)}>
        <section className="filmImage"> {this.displayImage()} </section>
        {this.displayRating(this.props.film.vote_average)}
        {/* <section className="filmRating">
          {this.getRating(this.props.film.vote_average)}
          </section> */}
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

