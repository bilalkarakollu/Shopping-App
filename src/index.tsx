import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routers';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
