import {
  Box,
  Heading,
  Link,
  Text,
  Stack,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Creator } from "../hooks/use-graphql";

interface Props {
  creator: Creator;
}
function ShowCreator({ creator }: Props): React.ReactElement {
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
              <Link as={RouterLink} to={`/comics/${c.book.id}`}>
                {c.book.displayName}
              </Link>{" "}
              ({c.role})
            </ListItem>
          ))}
        </List>
      </Box>
      <Text>Originally created:{creator.createdAt}</Text>
      <Text>Last updated at{creator.updatedAt}</Text>
    </>
  );
}

export default ShowCreator;
