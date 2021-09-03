import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Link from "../../../components/Link";
import { Column, Table } from "../../../components/Table";
import { Book, Series } from "../../../types";

interface Props {
  series: Series;
}

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
  },
];

function ShowSeries({ series }: Props): React.ReactElement {
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
    </>
  );
}

export default ShowSeries;
