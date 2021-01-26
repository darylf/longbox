import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookDetailsFragment, useBookQuery } from '../../hooks/graphql';

function getDisplayName({
  alternateTitle,
  issue,
  seriesName
}: BookDetailsFragment): string {
  return alternateTitle ? alternateTitle : `${seriesName} #${issue}`;
}

function BookProfile(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useBookQuery({
    variables: { id }
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  const book = data?.book || ({} as BookDetailsFragment);
  const title = getDisplayName(book);

  return (
    <>
      <h1>{title}</h1>
      <p>
        <b>Issue:</b> {book.issue}
      </p>
      <Link to={`/books/${book.id}/edit`}>Edit</Link>
    </>
  );
}

export default BookProfile;
