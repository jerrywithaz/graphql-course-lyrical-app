import App from "../../components/App";
import SongsPage from "../../pages/SongsPage";
import SongPage from "../../pages/SongPage";
import { RouteConfig } from "../../components/SwitchWithSubRoutes/types";
import AddSongPage from "../../pages/AddSongPage";

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
        path: "/songs",
        exact: true,
        component: SongsPage
      },
      {
        path: "/songs/add",
        exact: true,
        component: AddSongPage
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
