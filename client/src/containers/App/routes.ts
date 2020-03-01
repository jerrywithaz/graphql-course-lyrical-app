import App from "../../components/App";
import SongsPage from "../../components/SongsPage";
import SongPage from "../../components/SongPage";
import { RouteConfig } from "../../components/SwitchWithSubRoutes/types";

const Routes: RouteConfig[] = [
  {
    path: "/",
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: SongsPage
      },
      {
        path: "/songs/:id",
        exact: true,
        component: SongPage
      }
    ]
  }
];

export default Routes;
