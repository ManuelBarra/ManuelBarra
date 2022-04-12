/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './actionTypes';

export default function movieDetail(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=c953b29ed723f6d4e60c4d192395bc92`);
      dispatch({
        type: actionTypes.LOAD_MOVIE_DETAILS,
        data
      });
    } catch (error) {
      console.log(error);
    }
  };
}
