import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useBookQuery } from '../../graphql/generated';

function BookProfile(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useBookQuery({
    variables: { id }
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return (
    <>
      <h1>{data?.book.title}</h1>
      <p>
        <b>Issue:</b> {data?.book.issue}
      </p>
      <Link to={`/books/${data?.book.id}/edit`}>Edit</Link>
    </>
  );
}

export default BookProfile;
