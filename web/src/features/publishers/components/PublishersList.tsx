import { ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import Link from "../../../components/Link";
import { usePublishersQuery } from "../api/publishers.query.generated";

export const PublisherList = function (): React.ReactElement {
  const { data, loading, error } = usePublishersQuery();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const publisherList =
    data?.publishers.nodes
      ?.filter((p) => p != null)
      .sort((a, b) => `${a?.name}`.localeCompare(`${b?.name}`)) ?? [];

  return (
    <UnorderedList>
      {publisherList.map((p) => (
        <ListItem key={p?.id}>
          <Link to={`/publishers/${p?.id}`}>{p?.name}</Link>
        </ListItem>
      ))}
    </UnorderedList>
  );
};
