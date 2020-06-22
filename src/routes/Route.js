import React from 'react';
import { Route } from 'react-router-dom';

const Routes = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={() => <Component />} />
  );
};

export default Routes;
