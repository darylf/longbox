import { Box, Heading, ListItem, Stack, UnorderedList } from "@chakra-ui/react";
import React from "react";
import Link from "../components/link";
import NewPublisherForm from "../components/new-publisher-form";
import { usePublishersQuery } from "../hooks/use-graphql";

function Publishers(): React.ReactElement {
  const { data, loading, error } = usePublishersQuery();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const publisherList =
    data?.publishers.nodes
      ?.filter((p) => p != null)
      .sort((a, b) => a!.name.localeCompare(b!.name)) ?? [];

  return (
    <UnorderedList>
      {publisherList.map((p) => (
        <ListItem key={p?.id}>
          <Link to={`/publishers/${p?.id}`}>{p?.name}</Link>
        </ListItem>
      ))}
    </UnorderedList>
  );
}

function ListPublishers(): React.ReactElement {
  return (
    <Box p="6">
      <Stack>
        <Heading>Publishers</Heading>
        <NewPublisherForm />
        <Publishers />
      </Stack>
    </Box>
  );
}

export default ListPublishers;
