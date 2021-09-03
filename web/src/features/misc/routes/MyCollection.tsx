import { Heading, Stack } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Head } from "../../../components/Head";

export default function MyCollection(): ReactElement {
  return (
    <>
      <Head title="My Collection" />
      <Stack>
        <Heading>My Collection</Heading>
        <p>This page is still under construction</p>
      </Stack>
    </>
  );
}
