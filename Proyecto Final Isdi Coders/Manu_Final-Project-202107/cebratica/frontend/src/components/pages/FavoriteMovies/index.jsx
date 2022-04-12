import React from 'react';
import DeleteInFavoriteList from '../../sections/DeleteInFavoriteList/DeleteInFavoriteList';

import './FavouriteList.scss';

const FavoriteMovies = () => {
  // eslint-disable-next-line max-len
  const localS = Object.entries(localStorage).map((element) => ({ element: JSON.parse(element[0]), film: JSON.parse(element[1]) }));
  return (
    <section className="detail">
      <h1 id="h1-title" className="detail__h1-title">Here you have all favorite movies</h1>
      {localS.map((e) => (
        <div className="detail__conatiner-card">
          <div className="detail__conatiner-card__detail card-detail">
            <h2 className="card-detail__h2-title">{e.film.id.title}</h2>
            <h3 className="card-detail__h3-title">
              Date:
            </h3>
            <span className="card-detail__date">{e.film.id.release_date}</span>
            <h3 className="card-detail__description-text">
              Description:
            </h3>
            <span card-detail__description-text__span>{e.film.id.overview}</span>
          </div>
          <div className="detail__conatiner-img img-detail">
            <img className="img-detail__img" src={`https://image.tmdb.org/t/p/w500${e.film.id?.backdrop_path}`} alt="" />
          </div>

          <DeleteInFavoriteList movie={e.film.id.original_title} />

        </div>
      ))}
    </section>
  );
};

export default FavoriteMovies;
