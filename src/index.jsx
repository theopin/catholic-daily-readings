import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import AppRouter from './components/router/AppRouter';
import ReduxStore from './store/ReduxStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ReduxStore}>
      <RouterProvider router={AppRouter} />
    </Provider>
  </React.StrictMode>,
);
