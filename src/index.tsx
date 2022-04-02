import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routers';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline/>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
