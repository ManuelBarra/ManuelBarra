import axios from 'axios';
import actionTypes from './actionTypes';

export default function searchMovies(movie) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c953b29ed723f6d4e60c4d192395bc92&query=${movie}`);
      dispatch({
        type: actionTypes.LOAD_SEARCHED_MOVIES,
        data: data.results
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
}
