import { Box, Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { Image } from "../../../types";

interface BookImageFormProps {
  bookId: string;
  images: Array<Image>;
}

function BookImageForm({
  bookId,
  images,
}: BookImageFormProps): React.ReactElement {
  return (
    <Box>
      <Table>
        <Thead>
          <tr>
            <Th>Book</Th>
            <Th>URL</Th>
            {/* <Th>Extension</Th>
            <Th>Height</Th>
            <Th>Width</Th> */}
          </tr>
        </Thead>
        <Tbody>
          {images.map((image) => (
            <Tr key={image.url}>
              <Td>{bookId}</Td>
              <Td>{image.url}</Td>
              {/* <Td>{image.extension}</Td>
              <Td>{image.height}</Td>
              <Td>{image.width}</Td> */}
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

export default BookImageForm;
