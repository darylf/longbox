import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Publisher, Series, usePublisherQuery } from '../../hooks/graphql';

const AdminControls = styled.div`
  margin-top: 2em;
`;

function Show(): JSX.Element {
  const { id: paramId } = useParams<{ id: string }>();
  const { loading, error, data } = usePublisherQuery({
    variables: { id: paramId }
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  const { id, name } = Object.assign({} as Publisher, data?.publisher);

  const SeriesList = data?.publisher.series.map((item) => {
    const { id, name } = Object.assign({} as Series, item);
    return (
      <li key={`series-${id}`}>
        <Link to={`/series/${id}`}>{name}</Link>
      </li>
    );
  });

  return (
    <>
      <h1>{name}</h1>

      <ul>{SeriesList}</ul>

      <AdminControls>
        <Link to={`/publishers/${id}/edit`}>Edit</Link>
      </AdminControls>
    </>
  );
}

export default Show;
