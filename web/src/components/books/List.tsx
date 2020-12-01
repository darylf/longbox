import * as React from 'react';
import { gql, useQuery } from '@apollo/client';

interface IBook {
  name: string;
}

const GET_BOOKS = gql`
  query GetBooks {
    books {
      name
    }
  }
`;

function BookList(): JSX.Element {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  const BookItems = data.books.map(({ name }: IBook) => (
    <li key={name}>{name}</li>
  ));

  return <ol>{BookItems}</ol>;
}

export default BookList;
