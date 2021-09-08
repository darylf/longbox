import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import FormDrawer from "../../../components/FormDrawer";
import Link from "../../../components/Link";
import { Column, Table } from "../../../components/Table";
import { Book, Series } from "../../../types";
import UpdateBookForm from "../../books/components/UpdateBookForm";

interface Props {
  series: Series;
}

function ShowSeries({ series }: Props): React.ReactElement {
  const [editingBook, setEditingBook] = useState<Book | undefined>({} as Book);
  const formHtmlId = "edit-book";
  const [isOpen, setIsOpen] = useState(false);

  const bookColumns: Array<Column<Book>> = [
    { key: "format", label: "Format" },
    { key: "issue", label: "Issue" },
    { key: "price", label: "Cost" },
    { key: "pageCount", label: "Pages" },
    { key: "publicationDate", label: "Publication Date" },
    {
      key: "id",
      label: "",
      render: (b) => <Link to={`/comics/${b.id}`}>View</Link>,
      uniqueKey: "view",
    },
    {
      key: "id",
      label: "",
      render: (b) => (
        <Button
          onClick={() => {
            setEditingBook(b);
            setIsOpen(true);
          }}
        >
          Edit
        </Button>
      ),
      uniqueKey: "edit",
    },
  ];

  return (
    <>
      <Flex p={6}>
        <Box p={10}>
          <Stack spacing={0} align="center" mb={5}>
            <Heading size="2xl" fontWeight={500}>
              {series.name}
            </Heading>
            <Heading size="lg" fontWeight={300} color="gray.500">
              {series.publisherName}
            </Heading>
          </Stack>
          {series.books && <Table items={series.books} columns={bookColumns} />}
        </Box>
      </Flex>
      <Text>Originally created:{series.createdAt}</Text>
      <Text>Last updated at {series.updatedAt}</Text>
      <FormDrawer
        id={formHtmlId}
        showOpenButton={false}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <UpdateBookForm
          htmlId={formHtmlId}
          title="Edit Book"
          series={series}
          book={editingBook}
        />
      </FormDrawer>
    </>
  );
}

export default ShowSeries;
