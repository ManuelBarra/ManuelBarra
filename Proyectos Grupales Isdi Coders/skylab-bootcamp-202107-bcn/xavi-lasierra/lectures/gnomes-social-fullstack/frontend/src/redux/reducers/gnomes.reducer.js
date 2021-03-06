import actionTypes from '../actions/gnomes.actions';

function gnomesReducer(gnomes = [], action) {
  let newGnomes = gnomes;
  if (action.type === actionTypes.LOAD_GNOMES) {
    newGnomes = action.data;
  }
  return newGnomes;
}

export default gnomesReducer;
