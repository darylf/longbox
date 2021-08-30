import {
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import Link from "../components/link";
// import NewPublisherForm from "../components/new-publisher-form";
import NewSeriesForm from "../components/new-series-form";
import { useLoginState } from "../hooks/use-authentication";

const AdminPage = (): ReactElement => {
  const { authenticated } = useLoginState();
  if (!authenticated) {
    return (
      <Stack p={6}>
        <Heading>Access denied</Heading>
        <Text>Please log in using the link in the header.</Text>
      </Stack>
    );
  }
  return (
    <Stack p={6}>
      <Heading>Administration</Heading>
      <UnorderedList>
        {/* <ListItem>
          <NewPublisherForm />
        </ListItem> */}
        <ListItem>
          <NewSeriesForm />
        </ListItem>
        <ListItem>
          <Link to="/books/new">Create Book</Link>
        </ListItem>
      </UnorderedList>
    </Stack>
  );
};

export default AdminPage;
