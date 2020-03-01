import React from 'react';
import { Route } from 'react-router-dom';
import { RouteConfig } from '../../types';

const RouteWithSubRoutes = ({ path, routes, component: RouteComponent}: RouteConfig) => {

    return (
      <Route
        path={path}
        render={props => (
          <RouteComponent {...props} routes={routes} />
        )}
      />
    );

}

  export default RouteWithSubRoutes;