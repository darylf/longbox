import * as React from "react";
import styled from "styled-components";
import { Book, useBooksQuery } from "../../hooks/graphql";

function BookPage(): JSX.Element {
  const { data, loading, error } = useBooksQuery();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  const books = new Array<Book>();
  const BookItems = data?.books.nodes?.map((bookResult) => {
    books.push(Object.assign({} as Book, bookResult));
  });

  console.log(books);

  return <BookList books={books} />;
}

export default BookPage;

const Table = styled.table`
  width: 100%;
`;

interface BookListProps {
  books: Array<Book>;
}
const BookList = ({ books }: BookListProps) => {
  const BookItems = books.map((book) => {
    return (
      <tr key={`books-${book.id}`}>
        <td>{book.id}</td>
        <td>{book.publisherName}</td>
        <td>{book.seriesName}</td>
        <td>{book.issue}</td>
        <td>{book.format}</td>
        <td>{book.publicationDate}</td>
        <td>{book.price}</td>
        <td>{book.pageCount}</td>
      </tr>
    );
  });

  return (
    <Table>
      <thead>
        <tr>
          <td>id</td>
          <td>Publisher</td>
          <td>Series</td>
          <td>Issue #</td>
          <td>Format</td>
          <td>Publication Date</td>
          <td>Price</td>
          <td>Pages</td>
        </tr>
      </thead>
      <tbody>{BookItems}</tbody>
    </Table>
  );
};
