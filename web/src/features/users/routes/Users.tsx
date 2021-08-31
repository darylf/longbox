import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import React from "react";
import Link from "../../../components/Link";
import { useUsersQuery } from "../api/users.query.generated";

function UserList(): React.ReactElement {
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

export default function Users(): React.ReactElement {
  return (
    <Box p="6">
      <Heading>Users</Heading>
      <div>
        <UserList />
      </div>
    </Box>
  );
}
