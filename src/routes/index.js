import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CompareStates from '../pages/CompareStates';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={CompareStates} />
  </Switch>
);

export default Routes;
