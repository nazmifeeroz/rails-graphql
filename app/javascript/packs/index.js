import React from 'react';
import { render } from 'react-dom';
import { gql } from 'apollo-boost';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';

import client from '../utils/apollo';

const ITEMS_QUERY = gql`
  {
    items {
      title
      imageUrl
      user {
        email
      }
    }
  }
`;

const ListItems = () => {
  const { loading, data, error } = useQuery(ITEMS_QUERY);
  console.log('loading,data,error', loading, data, error);
  return <div>hello</div>;
};

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
      <ListItems />
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));
