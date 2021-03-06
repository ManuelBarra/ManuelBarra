import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './Redux/store';
import Header from './components/Header/Index';
import Cart from './components/Cart/Index';
import AtriclesList from './components/ArticlesList/Index';

import './App.scss';

function App() {
  return (
    <>
      <Provider store={configureStore()}>
        <Header />
        <div className="main">
          <AtriclesList className="articleList" />
          <Cart className="cart" />
        </div>
      </Provider>
    </>
  );
}

export default App;
