import { Box, Button, Table, Tbody, Td, Tr } from "@chakra-ui/react";
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { Credit } from "../../../types";

interface BookCreditsFormProps {
  bookId: string;
  credits: Array<Credit>;
}

function BookCreditsForm({
  bookId,
  credits,
}: BookCreditsFormProps): React.ReactElement {
  return (
    <Box>
      <Table>
        <Tbody>
          {credits.map((credit) => (
            <Tr key={credit.id}>
              <Td>{bookId}</Td>
              <Td>{credit.id}</Td>
              <Td>{credit.creatorName}</Td>
              <Td>{credit.role}</Td>
              <Td>{credit.position}</Td>
              <Td>{credit.featured}</Td>
              <Td>
                <Button colorScheme="red">
                  <FiTrash2 />
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default BookCreditsForm;
