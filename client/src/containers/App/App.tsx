import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import {
  HashRouter
} from "react-router-dom";
import { GraphQLClient } from '../../graphql';
import GlobalStyles from '../../components/GlobalStyles';
import SwitchWithSubRoutes from '../../components/SwitchWithSubRoutes';
import routes from './routes';

function AppContainer() {

  return (
    <ApolloProvider client={GraphQLClient}>
      <HashRouter>
        <GlobalStyles/>
          <SwitchWithSubRoutes routes={routes}/>
      </HashRouter>
    </ApolloProvider>
    
  );
}

export default AppContainer;
