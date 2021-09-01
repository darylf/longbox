import {
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import Link from "../../../components/Link";
import { Publisher } from "../../../types";

interface ViewPublisherProps {
  publisher: Publisher;
}

export const ViewPublisher = ({
  publisher,
}: ViewPublisherProps): React.ReactElement => {
  return (
    <Stack>
      {" "}
      <Heading size="2xl" fontWeight={500}>
        {publisher.name}
      </Heading>
      <UnorderedList pl={10}>
        {publisher.series
          // .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((s) => (
            <ListItem key={s.id}>
              <Link to={`/series/${s.id}`}>{s.name}</Link>
            </ListItem>
          ))}
      </UnorderedList>
      <Text>Originally created:{publisher.createdAt}</Text>
      <Text>Last updated at{publisher.updatedAt}</Text>
    </Stack>
  );
};
