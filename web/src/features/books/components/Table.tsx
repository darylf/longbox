import {
  Table as ChakraTable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import Link from "../../../components/Link";
import { Book } from "../../../types";

interface TableProps {
  books: Array<Book>;
}

const Table = ({ books }: TableProps): ReactElement => (
  <ChakraTable>
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
            <Link to={`/comics/${book.id}`} color="blue.400">
              View
            </Link>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </ChakraTable>
);

export default Table;
