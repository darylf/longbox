import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import React, { useState } from "react";
import Link from "../components/link";
import PublisherForm from "../components/publisher-form";
import {
  Publisher,
  useCreatePublisherMutation,
  usePublishersQuery,
} from "../hooks/use-graphql";

function NewPublisherForm(): React.ReactElement {
  const [publisher, setPublisher] = useState<Publisher | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createPublisher, { data, loading }] = useCreatePublisherMutation({
    variables: {
      name: `${publisher?.name}`,
    },
    onCompleted: (data) => {
      console.log("Success! Created ", data.createPublisher?.id);
      setIsModalOpen(false);
    },
    onError: (error) => console.error("An error has occured", error),
  });

  const handleSubmit = (publisherParam: Partial<Publisher>) => {
    createPublisher({ variables: { name: publisherParam.name ?? "" } });
  };

  return (
    <PublisherForm
      buttonText="Create a Publisher"
      handleSubmit={handleSubmit}
      isLoading={loading}
      isModalOpen={isModalOpen}
      publisher={publisher as Publisher}
      setIsModalOpen={setIsModalOpen}
      userErrors={[]}
    />
  );
}

function Publishers(): React.ReactElement {
  const { data, loading, error } = usePublishersQuery();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const publisherList =
    data?.publishers.nodes
      ?.filter((p) => p != null)
      .sort((a, b) => a!.name.localeCompare(b!.name)) ?? [];

  return (
    <List>
      {publisherList.map((p) => (
        <ListItem key={p?.id}>
          <Link to={`/publishers/${p?.id}`}>{p?.name}</Link>
        </ListItem>
      ))}
    </List>
  );
}

function ListPublishers(): React.ReactElement {
  return (
    <Box p="6">
      <Heading>Publishers</Heading>
      <div>
        <NewPublisherForm />
        <Publishers />
      </div>
    </Box>
  );
}

export default ListPublishers;
