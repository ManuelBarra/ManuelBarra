import actionTypes from '../actions/actionTypes';

const searchedMovieReducers = (filterMovie = [], action) => {
  let newFilterMovie = filterMovie;

  if (action.type === actionTypes.LOAD_SEARCHED_MOVIES) {
    newFilterMovie = action.data;
  }
  return newFilterMovie;
};
export default searchedMovieReducers;
