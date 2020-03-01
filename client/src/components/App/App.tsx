import React from 'react';
import SwitchWithSubRoutes from '../SwitchWithSubRoutes';
import { AppProps } from './types';

const App = ({ routes }: AppProps) => {
    return (
        <div>
            <SwitchWithSubRoutes routes={routes}/>
        </div>
    );
}

export default App;