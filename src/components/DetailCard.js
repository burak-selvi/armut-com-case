import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class DetailCard extends Component {
  state = {
    added: false
  }

  handleClick = () => {
    this.setState({
      added: !this.state.added
    });
  }

  render() {

    const { id, year, originalTitle, duration, imdbRating, genres, posterurl, storyline, actors, writers, directors } = this.props;
    const compose = (...collection) => collection.map((item, index) => <span key={index}>{item}{collection.indexOf(item) !== !collection.length - 1 ? ',' : ''} </span>)

    const added = this.state.added;

    return (
      <div className="card-detail">
        <div className="card-container-detail">
          <div className="card-img-detail">
            <img src={posterurl} alt="movie-pic" />
            <div className={added ? 'remove' : 'add'} onClick={this.handleClick}><span>{added ? '-' : '+'}</span></div>
          </div>
          <div className="card-body-detail">
            <div>
              <div className="title-detail">
                <h2 className="movie-header-d">{originalTitle}</h2>
                <span className="rating-detail">{imdbRating}</span>
                <div className="meter-detail"><span style={{ width: `${imdbRating * 10}%` }}></span></div>
              </div>
              <p className="grey">{year} · {compose(genres)} · {duration} </p>
            </div>
            <p className="movie-story-detail">{storyline}</p>
            <div className="movie-info-detail">
              <h5>Director: {compose(directors)}</h5>
              <h5>Writers: {compose(writers)}</h5>
              <h5>Stars: {compose(actors)}</h5>
            </div>
            <Link
              to={`/detail/${id}`}
              className={`btn btn-${added ? 'remove' : 'add'}`}
              onClick={this.handleClick}
            >
              {added ? '- remove from watchlist' : '+ add to watchlist'}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}