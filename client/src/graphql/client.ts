import ApolloClient, { InMemoryCache } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  clientState: {
    defaults: {
    }
  },
  cache: new InMemoryCache({
    dataIdFromObject: o => o.id
  })
});

export default client;