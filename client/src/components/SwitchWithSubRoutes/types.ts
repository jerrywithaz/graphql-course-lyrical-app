import { RouteProps, RouteComponentProps } from 'react-router-dom';

export type RouteConfigComponentProps<Params = any> = {
    routes?: RouteConfig[]
} & RouteComponentProps<Params>;

export type RouteConfigComponent<Params = any> = React.ComponentType<RouteConfigComponentProps<Params>>;

export type RouteConfig = {
    routes?: RouteConfig[],
    component: RouteConfigComponent
} & Exclude<RouteProps, "component">;

export type SwitchWithSubRoutesProps = {
    routes?: RouteConfig[]
};