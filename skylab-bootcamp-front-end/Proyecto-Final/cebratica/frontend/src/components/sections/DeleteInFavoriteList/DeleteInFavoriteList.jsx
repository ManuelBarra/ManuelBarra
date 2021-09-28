import React from 'react';

import './DeleteInFavouriteList.scss';

const removeMovieOfLocalStore = (movie) => {
  localStorage.removeItem(JSON.stringify(movie.movie));

  return (
  // eslint-disable-next-line no-alert
    alert('Delete Item')
  );
};
const DeleteInFavoriteList = (movie) => (
  <div data-testId="div-button-delete" className=".button-detail__container">
    <button data-testId="button-delete" className="addButton" type="submit" onClick={() => { removeMovieOfLocalStore(movie); window.location.reload(); }}>Delete Movie</button>
  </div>

);
export default DeleteInFavoriteList;
