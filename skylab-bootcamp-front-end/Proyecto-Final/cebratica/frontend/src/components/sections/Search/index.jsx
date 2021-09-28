import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import searchMovies from '../../../redux/actions/actionCreatorSearchedMovies';
import AddToFavourites from '../AddFavButtons';

import './Search.scss';
import '../../App.scss';

const SearchMovies = () => {
  const { isAuthenticated } = useAuth0();
  const [searchMovie, setSearchMovie] = useState('');

  const handleOnChange = (event) => { setSearchMovie(event.target.value); };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchMovies(searchMovie));
  }, [searchMovie]);

  const searchedMovies = useSelector((store) => store.searchMovies);

  return (
    <section className="section-search-movie">

      <h2 data-testid="h2-title" className="section-search-movie__h2-title">Search Movies</h2>
      <form data-testid="form-search" onSubmit={handleSubmit} className="section-search-movie__search-form">
        <input
          data-testid="inpùt-search"
          className="search-form__input"
          type="search"
          name="searchMovie"
          id="searchMovie"
          placeholder="Search your movies"
          value={searchMovie}
          onChange={handleOnChange}
        />
      </form>
      <div className="movies">

        { searchedMovies.length >= 1
           && <h2 className="movies__h2-title">Results</h2> }
        <div className="movies__grid">
          {searchedMovies?.map((movie) => (
            <div className="movies__movie-container">
              <Link className="movies__item" to={`moviedetails/${movie?.id}`}>
                <img className="movies__img" src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="Pouster" />
                <div className="moives__description-box">
                  <h3 id="movies__title">{movie?.title}</h3>
                  <p className="movies__average">{movie?.vote_average}</p>
                </div>
              </Link>
              <div>
                { isAuthenticated
           && <AddToFavourites id={movie} /> }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SearchMovies;
