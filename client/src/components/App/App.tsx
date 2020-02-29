import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { GraphQLClient } from './../../graphql';
import Songs from '../Songs';

function App() {

  return (
    <ApolloProvider client={GraphQLClient}>
      <Songs/>
    </ApolloProvider>
    
  );
}

export default App;
