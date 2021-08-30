import { Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { PublisherList } from "../components/PublishersList";
import { NewPublisher } from "./NewPublisher";

export const Publishers = (): React.ReactElement => {
  return (
    <Box p="6">
      <Stack>
        <Heading>Publishers</Heading>
        <NewPublisher />
        <PublisherList />
      </Stack>
    </Box>
  );
};

export default Publishers;
