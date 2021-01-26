import * as React from 'react';
import styled from 'styled-components';
import { Book, useBooksQuery } from '../../hooks/graphql';
import Card from './Card';

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

const List = styled.ol`
  margin: 1em 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListItem = styled.li`
  list-style-type: none;
  width: 20rem;
`;
