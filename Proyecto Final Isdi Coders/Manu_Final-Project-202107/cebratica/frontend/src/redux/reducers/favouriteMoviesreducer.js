import actionTypes from '../actions/actionTypes';

const favouriteMoviesreducer = (favMovieList = [], action) => {
  let newFavMovieList = favMovieList;
  switch (action.type) {
    case actionTypes.LOAD_FAVOURITE_MOVIES:
      newFavMovieList = action.favMovies?.map((movie) => movie);
      break;

    case actionTypes.DELETE_FAVOURITE_MOVIES:
      newFavMovieList = favMovieList.filter((movie) => movie.name !== action.movie.name);
      break;

    case actionTypes.ADD_FAVOURITE_MOVIES:
      if (!favMovieList.some((movie) => movie.name === action.movie.name)) {
        newFavMovieList = [...favMovieList, action.movie];
      }
      break;

    default:
      break;
  }
  return newFavMovieList;
};

export default favouriteMoviesreducer;
