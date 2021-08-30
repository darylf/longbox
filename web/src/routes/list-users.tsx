import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import React from "react";
import Link from "../components/link";
import { useUsersQuery } from "../hooks/use-graphql";

function Users(): React.ReactElement {
  const { data, loading, error } = useUsersQuery();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const publisherList =
    data?.users.nodes
      ?.filter((p) => p != null)
      .sort((a, b) => a!.username.localeCompare(b!.username)) ?? [];

  return (
    <List>
      {publisherList.map((p) => (
        <ListItem key={p?.id}>
          <Link to={`/users/${p?.id}`}>{p?.username}</Link>
        </ListItem>
      ))}
    </List>
  );
}

function ListUsers(): React.ReactElement {
  return (
    <Box p="6">
      <Heading>Users</Heading>
      <div>
        <Users />
      </div>
    </Box>
  );
}

export default ListUsers;
