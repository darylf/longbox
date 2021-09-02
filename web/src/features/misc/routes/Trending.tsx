import { Heading, Stack, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Head } from "../../../components/Head";
import SidebarWithHeader from "../../../components/SidebarWithHeader";

export default function Trending(): ReactElement {
  return (
    <SidebarWithHeader>
      <Head title="Trending Title" />
      <Stack>
        <Heading>Trending Titles</Heading>
        <Text>Coming soon.</Text>
      </Stack>
    </SidebarWithHeader>
  );
}
