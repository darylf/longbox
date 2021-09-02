import { Heading, Stack } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Head } from "../../../components/Head";
import SidebarWithHeader from "../../../components/SidebarWithHeader";

export default function MyCollection(): ReactElement {
  return (
    <SidebarWithHeader>
      <Head title="My Collection" />
      <Stack>
        <Heading>My Collection</Heading>
        <p>This page is still under construction</p>
      </Stack>
    </SidebarWithHeader>
  );
}
