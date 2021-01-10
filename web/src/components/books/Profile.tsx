import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useBookQuery } from '../../graphql/generated';

function BookProfile(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useBookQuery({
    variables: { id }
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return <h1>{data?.book.title}</h1>;
}

export default BookProfile;
