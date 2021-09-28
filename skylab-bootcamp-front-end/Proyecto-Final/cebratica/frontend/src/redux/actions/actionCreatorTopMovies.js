import axios from 'axios';
import actionTypes from './actionTypes';

export default function loadMovies(page) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c953b29ed723f6d4e60c4d192395bc92&language=en-US&page=${page}`);
      dispatch({
        type: actionTypes.LOAD_TOP_MOVIES,
        data: data.results
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
}
