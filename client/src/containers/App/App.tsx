import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import {
  HashRouter,
  Route,
} from "react-router-dom";
import { GraphQLClient } from '../../graphql';
import GlobalStyles from '../../components/GlobalStyles';

import App from '../../components/App';

function AppContainer() {

  return (
    <ApolloProvider client={GraphQLClient}>
      <HashRouter>
        <GlobalStyles/>
        <Route path="/" component={App}/>
      </HashRouter>
    </ApolloProvider>
    
  );
}

export default AppContainer;
