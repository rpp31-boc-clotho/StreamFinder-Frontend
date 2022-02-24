import React from 'react';

class MovieCard extends React.Component {
  constructor(props) {
    super(props)
  }

  getRating(rating) {
    return (rating * 10) + '%'
  }

  displayDate () {
    //added one more condition to make it work for data from backend
    if (this.props.film.media_type === 'movie' ||  this.props.film.mediaType === 'movie') {
      return (this.props.film.release_date.substring(0,4))
    } else {
      return (this.props.film.first_air_date.substring(0,4))
    }
  }

  displayImage () {
    //added for backend data
    let url ="";
    if(this.props.film.poster_path) {
      url = ('https://image.tmdb.org/t/p/w185' + (this.props.film.poster_path))
    } else {
      url = this.props.film.imgUrl;
    }
    //let url = ('https://image.tmdb.org/t/p/w185' + (this.props.film.poster_path))

    return (<img src={url} className="cardImage"></img>)
  }

  render() {
    return (
      <div className="filmCard">
        <section className="filmImage"> {this.displayImage()} </section>
        <section className="filmRating">
          {this.getRating(this.props.film.rating)}

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
//removed for backend data
//{this.getRating(this.props.film.vote_average)}