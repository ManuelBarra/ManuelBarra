import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store/index';
import Home from './pages/Home/index';
import FavoriteMovies from './pages/FavoriteMovies';
import TopRatedMovies from './pages/TopMovies';
import Login from './pages/Login';
import MovieDetails from './pages/MovieDetails';
import Pages404 from './pages/NotFound';
import Profile from './pages/Profile';

import Header from './sections/Header/index';
import Footer from './sections/Footer';
import './App.scss';

const App = () => (
  <Provider store={configureStore()}>

    <Router>
      <Header />
      <Switch>

        <Route path="/featuredmovies" component={TopRatedMovies} />
        <Route path="/favoritemovies" component={FavoriteMovies} />
        <Route path="/moviedetails/:id" component={MovieDetails} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/" exact component={Home} />

        <Route path="/home" exact component={Home} />
        <Route path="/login" exact component={Login} />

        <Route component={Pages404} />
      </Switch>
      <Footer />
    </Router>
  </Provider>
);

export default App;
