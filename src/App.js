import React, { memo } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Dashboard from './pages/Dashboard';

const App = () => (
  <BrowserRouter>
    <Dashboard />
  </BrowserRouter>
);

export default memo(App);
