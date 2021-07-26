import * as React from "react";
import { Table, Tbody, Th, Thead, Tr, Td } from "@chakra-ui/react";
import { Book } from "../hooks/graphql";

interface BookTableProps {
  books: Array<Book>;
}

const BookTable = ({ books }: BookTableProps) => (
  <Table>
    <Thead>
      <Tr>
        <Th>Publisher</Th>
        <Th>Series</Th>
        <Th>Issue</Th>
        <Th>Cost</Th>
        <Th>Pages</Th>
      </Tr>
    </Thead>
    <Tbody>
      {books.map((book) => (
        <Tr>
          <Td>{book.publisherName}</Td>
          <Td>{book.seriesName}</Td>
          <Td>{book.issue}</Td>
          <Td>{book.price}</Td>
          <Td>{book.pageCount}</Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

export default BookTable;
