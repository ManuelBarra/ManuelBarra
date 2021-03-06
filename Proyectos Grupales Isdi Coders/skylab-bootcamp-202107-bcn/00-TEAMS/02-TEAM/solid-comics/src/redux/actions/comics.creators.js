import axios from 'axios';
import actionTypes from './comics.types';

function loadComics() {
  const baseUrl = 'http://gateway.marvel.com/v1/public/';
  const items = {
    characters: 'characters',
    comics: 'comics',
    creators: 'creators',
    events: 'events',
    series: 'series',
    stories: 'stories'
  };
  const limit = 'limit=99';
  const offset = 'offset=800';
  const apikey = process.env.REACT_APP_MARVEL_APIKEY;
  const hash = process.env.REACT_APP_MARVEL_HASH;

  return async (dispatch) => {
    const { data } = await axios(
      `${baseUrl}${items.comics}?ts=1&${limit}&${offset}&apikey=${apikey}&hash=${hash}`
    );

    dispatch({
      type: actionTypes.LOAD_COMICS,
      comics: data
    });
  };
}
function loadCharacters() {
  const baseUrl = 'http://gateway.marvel.com/v1/public/';
  const items = {
    characters: 'characters',
    comics: 'comics',
    creators: 'creators',
    events: 'events',
    series: 'series',
    stories: 'stories'
  };
  const limit = 'limit=99';
  const offset = `offset=${Math.random() * 1000}`;
  const apikey = process.env.REACT_APP_MARVEL_APIKEY;
  const hash = process.env.REACT_APP_MARVEL_HASH;

  return async (dispatch) => {
    const { data } = await axios(
      `${baseUrl}${items.characters}?ts=1&${limit}&${offset}&apikey=${apikey}&hash=${hash}`
    );

    dispatch({
      type: actionTypes.LOAD_CHARACTERS,
      characters: data
    });
  };
}

function filterStatus() {
  return {
    type: actionTypes.FILTER_STATUS,
    filterStatus: 'false'
  };
}
function filterComics(inputValue, comics) {
  if (!inputValue) {
    return {
      type: actionTypes.FILTER_COMICS,
      filtered: []
    };
  }
  const filteredList = comics?.filter((comic) => comic?.title.toLowerCase().includes(
    inputValue.toLowerCase()
  ));

  return {
    type: actionTypes.FILTER_COMICS,
    filtered: filteredList
  };
}

export {
  loadComics,
  loadCharacters,
  filterComics,
  filterStatus
};
