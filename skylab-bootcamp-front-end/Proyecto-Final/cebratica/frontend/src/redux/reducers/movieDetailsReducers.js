import actionTypes from '../actions/actionTypes';

const movieDetailsReducer = (movieDetails = [], action) => {
  let newMovieDetails = movieDetails;
  if (action.type === actionTypes.LOAD_MOVIE_DETAILS) {
    newMovieDetails = action.data;
  }
  return newMovieDetails;
};

export default movieDetailsReducer;
