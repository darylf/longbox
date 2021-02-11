import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Book, useBookQuery } from '../../hooks/graphql';
import Card from './Card';

function BookProfile(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useBookQuery({
    variables: { id }
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  const book = data?.book || ({} as Book);

  return (
    <>
      <h1>{book.displayName}</h1>
      <div style={{ width: '300px' }}>
        <Card bookId={book.id} bookName={book.displayName} />
      </div>
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
