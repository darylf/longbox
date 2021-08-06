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
import { Link as RouterLink, useParams } from "react-router-dom";
import { Publisher, usePublisherQuery } from "../hooks/use-graphql";

interface Props {
  publisher: Publisher;
}

function ShowPublisher({ publisher }: Props): React.ReactElement {
  return (
    <>
      <Box p={6}>
        <Box p={10}>
          <Stack spacing={0} align="center" mb={5}>
            <Heading size="2xl" fontWeight={500}>
              {publisher.name}
            </Heading>
          </Stack>
        </Box>
        <List>
          {publisher.series.map((s) => (
            <ListItem key={s.id}>
              <Link as={RouterLink} to={`/series/${s.id}`}>
                {s.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
      <Text>Originally created:{publisher.createdAt}</Text>
      <Text>Last updated at{publisher.updatedAt}</Text>
    </>
  );
}

export default ShowPublisher;
