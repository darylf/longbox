import * as React from 'react';
import { Link } from 'react-router-dom';
import { Publisher, usePublisherListQuery } from '../../hooks/graphql';

function PublisherList(): JSX.Element {
  const { loading, error, data } = usePublisherListQuery();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  const PublisherItems = data?.publishers.nodes?.map((item) => {
    const { id, name } = Object.assign({} as Publisher, item);
    return (
      <li key={id}>
        <Link to={`/publishers/${id}`}>{name}</Link>
      </li>
    );
  });

  return (
    <>
      <h1>Publishers</h1>
      <p>Browse publishers and discover a great series!</p>
      <ol>{PublisherItems}</ol>
    </>
  );
}

export default PublisherList;
