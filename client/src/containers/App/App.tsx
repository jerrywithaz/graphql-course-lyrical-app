import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { GraphQLClient } from '../../graphql';
import SongsPage from '../../components/SongsPage';

function App() {

  return (
    <ApolloProvider client={GraphQLClient}>
      <SongsPage/>
    </ApolloProvider>
    
  );
}

export default App;
