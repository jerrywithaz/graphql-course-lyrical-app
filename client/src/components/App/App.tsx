import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";
import SongsPage from '../SongsPage';
import SongPage from '../SongPage';

const App = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={SongsPage}/>
                <Route path="/songs" exact component={SongsPage}/>
                <Route path="/songs/:id" component={SongPage}/>
            </Switch>
        </div>
    );
}

export default App;