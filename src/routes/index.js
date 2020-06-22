import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import CompareDates from '../pages/CompareDates';
import CompareStates from '../pages/CompareStates';
import SingleState from '../pages/SingleState';
import Dashboard from '../pages/Dashboard';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    
    <Route path="/compareDates" component={CompareDates} />
    <Route path="/compareStates" component={CompareStates} />
    <Route path="/singleDate" component={SingleState} />
  </Switch>
);

export default Routes;
