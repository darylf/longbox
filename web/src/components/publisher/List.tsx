import * as React from 'react';
import { gql, useQuery } from '@apollo/client';

interface IPublisher {
  name: string;
}

const GET_PUBLISHERS = gql`
  query GetPublishers {
    publishers {
      name
    }
  }
`;

function PublisherList(): JSX.Element {
  const { loading, error, data } = useQuery(GET_PUBLISHERS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  const PublisherItems = data.publishers.map(({ name }: IPublisher) => (
    <li key={name}>{name}</li>
  ));

  return <ol>{PublisherItems}</ol>;
}

export default PublisherList;
