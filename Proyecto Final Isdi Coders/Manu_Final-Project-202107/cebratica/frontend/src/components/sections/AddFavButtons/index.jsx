/* eslint-disable react/destructuring-assignment */
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  sectionButtons: {
    margin: '-25px 0 0 0',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  buttonAdd: {
    margin: '0',
    padding: '0',
    height: '50px',
    width: '50px',
    colorPrimary: 'primary'
  },
  buttonDelete: {
    margin: '0',
    padding: '0',
    height: '50px',
    width: '50px'
  }
});
const setStoreMovie = (movie) => {
  try {
    if (!localStorage.getItem(JSON.stringify(movie.id.original_title))) {
      localStorage.setItem(JSON.stringify(movie?.id.original_title), JSON.stringify(movie));
      window.location.reload();
    }
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert('Elemento ya esta eliminado');
  }
};
const addFavButton = (movies) => {
  setStoreMovie(movies);

  return (
    <p>hello wordl</p>
  );
};
const removeStoreMovie = (movie) => {
  localStorage.removeItem(JSON.stringify(movie?.id.original_title));
  return (
    // eslint-disable-next-line no-alert
    alert('Delete Item')
  );
};
const removeFavButton = (movies) => {
  removeStoreMovie(movies);
  window.location.reload();
  return (
    <p>{movies}</p>
  );
};

const AddToFavourites = (movies) => {
  const classes = useStyles();

  return (
    <section className={classes.sectionButtons}>

      <IconButton aria-label="delete" color="primary" variant="container" className={classes.buttonDelete} type="submit" onClick={() => removeFavButton(movies)}>
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" color="primary" variant="container" className={classes.buttonAdd} type="submit" onClick={() => addFavButton(movies)}>
        {!localStorage.getItem(JSON.stringify(movies.id.original_title))
          ? <FavoriteBorder />
          : <Favorite /> }
      </IconButton>
    </section>
  );
};
export default AddToFavourites;
