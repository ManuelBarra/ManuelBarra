import axios from 'axios';
import actionTypes from './actionTypes';

const creditsMovie = (id) => async (dispatch) => {
  try {
    const { data } = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c953b29ed723f6d4e60c4d192395bc92&language=en-US`);
    dispatch({
      type: actionTypes.LOAD_CREDITS_DETAILS,
      data
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('CATCH ERROR');
  }
};

export default creditsMovie;
