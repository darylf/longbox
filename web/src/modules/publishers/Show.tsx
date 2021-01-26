import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemList from '../../components/shared/ItemList';
import { Publisher, usePublisherQuery } from '../../graphql/generated';

function Show(): JSX.Element {
  const { id: paramId } = useParams<{ id: string }>();
  const { loading, error, data } = usePublisherQuery({
    variables: { id: paramId }
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  const { id, name, series } = Object.assign({} as Publisher, data?.publisher);

  return (
    <>
      <h1>{name}</h1>
      <ItemList linkTo="/series/:id" list={series} />
      <Link to={`/publishers/${id}/edit`}>Edit</Link>
    </>
  );
}

export default Show;
