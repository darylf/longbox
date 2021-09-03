import { Heading, Stack, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Head } from "../../../components/Head";

export default function Trending(): ReactElement {
  return (
    <>
      <Head title="Trending Title" />
      <Stack>
        <Heading>Trending Titles</Heading>
        <Text>Coming soon.</Text>
      </Stack>
    </>
  );
}
