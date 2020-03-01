import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithSubRoutes from './components/RouteWithSubRoutes';
import { SwitchWithSubRoutesProps } from './types';

const Routes = ({ routes = [] }: SwitchWithSubRoutesProps) => {
    return (
        <Switch>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </Switch>
    );
};

export default Routes;