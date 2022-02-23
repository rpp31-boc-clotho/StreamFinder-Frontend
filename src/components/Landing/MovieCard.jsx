import React from 'react';

class MovieCard extends React.Component {
  constructor(props) {
    super(props)
  }

  getRating(rating) {
    return (rating * 10) + '%'
  }

  displayDate () {
    if (this.props.film.mediaType === 'movie' || this.props.film.media_type === 'movie') {
      return (this.props.film.release_date.substring(0,4))
    } else {
      return (this.props.film.first_air_date.substring(0,4))
    }
  }

  displayImage () {
    let url;
    if (this.props.film.poster_path) {
    url = ('https://image.tmdb.org/t/p/w185' + (this.props.film.poster_path))
    } else {
      url = this.props.film.imgUrl;
    }

    return (<img src={url} className="cardImage"></img>)
  }

  render() {
    return (
      <div className="filmCard">
        <section className="filmImage"> {this.displayImage()} </section>
        <section className="filmRating">
          {this.getRating(this.props.film.vote_average)}
          </section>
        <section className="filmTitle">
          {this.props.film.name || this.props.film.title}
          </section>
        <section className="filmDate">
          {this.displayDate()}
        </section>
      </div>
    )
  }
}

export default MovieCard;
