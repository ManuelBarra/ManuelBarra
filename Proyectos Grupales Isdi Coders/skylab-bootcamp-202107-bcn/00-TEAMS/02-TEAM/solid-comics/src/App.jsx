// import React, { useEffect } from 'react';
import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import configureStore from './redux/store';
import ComicList from './page/ComicList';
import Header from './components/header/Header';
import NotFound from './page/NotFound';
import Profile from './page/Profile';
import Characters from './page/Characters';
import Login from './page/Login';
import Footer from './components/footer/Footer';
import ComicDetail from './page/ComicDetail';
import CharacterDetail from './page/CharacterDetail';
import './App.css';

function App() {
  const
    { isAuthenticated } = useAuth0();
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Switch>

          <Route path="/login" exact component={Login} />
          {isAuthenticated
            ? (
              <Route render={() => (
                <>
                  <Header />

                  <div className="texture" />
                  <Switch>
                    <Route path="/" exact component={ComicList} />
                    <Route path="/comic-list" component={ComicList} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/characters" component={Characters} />
                    <Route path="/login" component={Login} />
                    <Route path="/comic-details/:comicId" component={ComicDetail} />
                    <Route path="/character-details/:characterId" component={CharacterDetail} />
                    <Route component={NotFound} />
                  </Switch>
                </>

              )}
              />
            )
            : <Route path="/" exact component={Login} />}
        </Switch>
        <Footer />
      </BrowserRouter>

    </Provider>

  );
}

export default App;
