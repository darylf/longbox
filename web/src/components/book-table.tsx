import { Link, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Book } from "../hooks/use-graphql";

interface BookTableProps {
  books: Array<Book>;
}

const BookTable = ({ books }: BookTableProps): ReactElement => (
  <Table>
    <Thead>
      <Tr>
        <Th>Publisher</Th>
        <Th>Series</Th>
        <Th>Issue</Th>
        <Th>Cost</Th>
        <Th>Pages</Th>
        <Th>&nbsp;</Th>
      </Tr>
    </Thead>
    <Tbody>
      {books.map((book) => (
        <Tr key={book.id}>
          <Td>{book.publisherName}</Td>
          <Td>{book.seriesName}</Td>
          <Td>{book.issue}</Td>
          <Td>{book.price}</Td>
          <Td>{book.pageCount}</Td>
          <Td>
            <Link as={RouterLink} to={`/comics/${book.id}`}>
              View
            </Link>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

export default BookTable;
