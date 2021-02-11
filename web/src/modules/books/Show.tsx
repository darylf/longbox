import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookDetailsFragment, useBookQuery } from '../../hooks/graphql';

function getDisplayName({ issue, seriesName }: BookDetailsFragment): string {
  return `${seriesName} #${issue}`;
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
        <b>Publisher:</b>
        <Link to={`/publishers/${book.publisher?.id}`}>
          {book.publisherName}
        </Link>
      </p>
      <p>
        <b>Series:</b>
        <Link to={`/series/${book.series?.id}`}>{book.seriesName}</Link>
      </p>
      <p>
        <b>Issue:</b> {book.issue}
      </p>
      <p>
        <b>Alternate Title:</b> {book.alternateTitle}
      </p>
      <p>
        <b>Format:</b> {book.format}
      </p>
      <p>
        <b>Summary:</b> {book.summary}
      </p>
      <p>
        <b>Created:</b> {book.createdAt}
      </p>
      <p>
        <b>Updated:</b> {book.updatedAt}
      </p>
      <Link to={`/books/${book.id}/edit`}>Edit</Link>
    </>
  );
}

export default BookProfile;
