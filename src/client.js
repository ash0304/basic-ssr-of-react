import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      {renderRoutes(Routes)}
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
