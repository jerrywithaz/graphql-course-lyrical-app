import React from 'react';
import SwitchWithSubRoutes from '../SwitchWithSubRoutes';
import { AppProps } from './types';

const App = ({ routes }: AppProps) => {
    return (
        <div>
            <div>
                <SwitchWithSubRoutes routes={routes}/>
            </div>
        </div>
    );
}

export default App;