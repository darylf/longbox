import { Box, Heading, List, ListItem, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Link from "../../../components/Link";
import { Creator } from "../../../types";

interface Props {
  creator: Creator;
}
const ShowCreator = function ({ creator }: Props): React.ReactElement {
  const displayName = `${creator.firstName} ${creator.lastName}`;

  return (
    <>
      <Box p={6}>
        <Box p={10}>
          <Stack spacing={0} align="center" mb={5}>
            <Heading size="2xl" fontWeight={500}>
              {displayName}
            </Heading>
          </Stack>
        </Box>
        <List>
          {creator.credits.map((c) => (
            <ListItem key={c.id}>
              <Link to={`/comics/${c.book.id}`}>{c.book.displayName}</Link> (
              {c.role})
            </ListItem>
          ))}
        </List>
      </Box>
      <Text>Originally created:{creator.createdAt}</Text>
      <Text>Last updated at{creator.updatedAt}</Text>
    </>
  );
};

export default ShowCreator;
