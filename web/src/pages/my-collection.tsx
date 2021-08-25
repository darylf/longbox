import { Heading, Stack } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { useLoginState } from "../hooks/use-authentication";

export default function MyCollection(): ReactElement {
  const { user } = useLoginState();
  return (
    <Stack>
      <Heading>{user?.username}'s Collection</Heading>
      <p>This page is still under construction</p>
    </Stack>
  );
}
