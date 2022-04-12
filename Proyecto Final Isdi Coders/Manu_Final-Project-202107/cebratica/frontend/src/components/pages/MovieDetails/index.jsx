import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import movieDetail from '../../../redux/actions/actionCreatorMovieDetail';
import CastMovieDetail from '../../sections/CastMovieDetail';

import './MovieDetail.scss';

const MovDetail = () => {
  const movieId = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieDetail(movieId.id));
  }, [movieId.id]);
  const movieDetails = useSelector((store) => store.movieDetails);

  return (
    <section data-testId="details-section" className="details-section">
      {movieDetails
      && (
      <div data-testId="movie-detail" className="movie-detail">
        <h1 className="movie-detail__h1-title">Movie Details</h1>
        <div className="movie-detail__item-box item-box">
          <div className="item-box__item-description">

            <h2 className="item-description__h2-title">{movieDetails?.title}</h2>
            <p className="item-description__description">{movieDetails?.overview}</p>
            <p className="item-description__rating-title">
              Rating:
              <span className="item-description__rating-number">{movieDetails?.vote_average}</span>
            </p>
            <div />
            <div>
              <CastMovieDetail movie={movieId.id} />
            </div>
          </div>
          <div className="item-box__item-picture-box item-picture-box">
            <img className="item-box__item-picture-box__img" src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`} alt="Pouster" />
          </div>
        </div>
      </div>
      )}
    </section>
  );
};
export default MovDetail;
