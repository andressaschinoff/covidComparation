import React, { memo } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles';

import Dashboard from './pages/Dashboard';

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Dashboard />
  </BrowserRouter>
);

export default memo(App);
