import React from 'react';
import { render } from 'react-dom';
import { gql } from 'apollo-boost';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';

import client from '../utils/apollo';

const ITEMS_QUERY = gql`
  {
    items {
      id
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
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      {data.items.map(item => (
        <div key={item.id}>
          <h3>Title: {item.title}</h3>
        </div>
      ))}
    </div>
  );
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
