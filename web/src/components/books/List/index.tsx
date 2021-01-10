import * as React from 'react';
import { Link } from 'react-router-dom';
import { Book, useBooksQuery } from '../../../graphql/generated';
import Card from '../Card';
import { List, ListItem } from './styles/List';

function BookList(): JSX.Element {
  const { data, loading, error } = useBooksQuery();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  const BookItems = data?.books.nodes?.map((bookResult) => {
    const book = Object.assign({} as Book, bookResult);
    return (
      <ListItem key={`books-${book.id}`}>
        <Card book={book} />
      </ListItem>
    );
  });

  return <List>{BookItems}</List>;
}

export default BookList;
