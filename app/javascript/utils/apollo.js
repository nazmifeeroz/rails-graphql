import ApolloClient, { InMemoryCache } from 'apollo-boost';

const uri = 'http://localhost:3000/graphql';
const token = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute('content');

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri,
  request: async operation => {
    operation.setContext({
      headers: {
        'X-CSRF-Token': token
      }
    });
  }
});

export default client;
