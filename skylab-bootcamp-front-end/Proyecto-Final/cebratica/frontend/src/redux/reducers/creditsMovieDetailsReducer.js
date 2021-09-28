import actionTypes from '../actions/actionTypes';

const creditsMovieReducer = (creditsMovieDetails = [], action) => {
  let newCreditsMovieDetails = creditsMovieDetails;
  if (action.type === actionTypes.LOAD_CREDITS_DETAILS) {
    newCreditsMovieDetails = action.data;
  }
  return newCreditsMovieDetails;
};

export default creditsMovieReducer;
