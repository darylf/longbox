import * as React from 'react';
import styled from 'styled-components';
import { BookDetailsFragment, useBooksQuery } from '../../graphql/generated';
import Card from './Card';

const StyledList = styled.ol`
  margin: 1em 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledListItem = styled.li`
  list-style-type: none;
  width: 20rem;
`;

function BookList(): JSX.Element {
  const { data, loading, error } = useBooksQuery();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  const BookItems = data?.books.map((book: BookDetailsFragment) => (
    <StyledListItem key={`books-${book.id}`}>
      <Card book={book} />
    </StyledListItem>
  ));

  return <StyledList>{BookItems}</StyledList>;
}

export default BookList;
