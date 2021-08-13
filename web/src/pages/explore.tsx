import { Heading, List, ListItem, Stack } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import Link from "../components/link";

export default function BrowseCollection(): ReactElement {
  return (
    <Stack>
      <Heading>Explore</Heading>
      <List>
        <ListItem>
          <Link to={"/publishers"}>Browse Publishers</Link>
        </ListItem>
      </List>
    </Stack>
  );
}
