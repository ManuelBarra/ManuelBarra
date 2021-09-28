import actionTypes from '../actions/actionTypes';

const topMoviesReducer = (topMovies = [], action) => {
  let newTopMovies = topMovies;
  if (action.type === actionTypes.LOAD_TOP_MOVIES) {
    newTopMovies = action.data;
  }
  return newTopMovies;
};

export default topMoviesReducer;
