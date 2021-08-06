import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  Stack,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Series } from "../hooks/use-graphql";

interface Props {
  series: Series;
}

function ShowSeries({ series }: Props): React.ReactElement {
  return (
    <>
      <Flex p={6}>
        <Box p={10}>
          <Stack spacing={0} align="center" mb={5}>
            <Heading size="2xl" fontWeight={500}>
              {series.name}
            </Heading>
          </Stack>
          {series.books && (
            <List>
              {series.books.map((b) => (
                <ListItem key={b.id}>
                  <Link as={RouterLink} to={`/comics/${b.id}`}>
                    {b.displayName}
                  </Link>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Flex>
      <Text>Originally created:{series.createdAt}</Text>
      <Text>Last updated at {series.updatedAt}</Text>
    </>
  );
}

export default ShowSeries;
