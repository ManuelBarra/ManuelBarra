import actionTypes from '../actions/gnomesTypes';

export default function loadGnomes(gnomes = [], action) {
  let newGnomes = gnomes;
  if (action.type === actionTypes.LOAD_GNOMES) {
    newGnomes = action.gnomes;
  }
  return newGnomes;
}
