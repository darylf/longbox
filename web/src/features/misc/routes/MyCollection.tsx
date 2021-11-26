import { Heading, Stack } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Head } from "../../../components/Head";

export default function MyCollection(): ReactElement {
  return (
    <>
      <Head title="My Collection" />
      <Stack>
        <Heading>My Collection</Heading>
        <p>
          <strong>Lists</strong>
        </p>
        <p>
          <strong>Collected</strong>
        </p>
        <p>
          <strong>Wish List</strong>
        </p>
        <p>
          <strong>Read</strong>
        </p>
      </Stack>
    </>
  );
}
