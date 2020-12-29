import * as React from 'react';
import { Link } from 'react-router-dom';
import { useGetAllBooksQuery, Book } from '../../graphql/generated';

function BookList(): JSX.Element {
  const { data, loading, error } = useGetAllBooksQuery({});

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  const BookItems = data?.books.map(
    ({ id, title }: Pick<Book, 'id' | 'title'>) => (
      <li key={`books-${id}`}>
        <Link to={`/books/${id}`}>{title}</Link>
      </li>
    )
  );

  return <ol>{BookItems}</ol>;
}

export default BookList;
