import { Heading, Stack, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Head } from "../../../components/Head";
import SidebarWithHeader from "../../../components/SidebarWithHeader";
import { useLoginState } from "../../../hooks/useAuthentication";

const AdminPage = (): ReactElement => {
  const { authenticated } = useLoginState();
  if (!authenticated) {
    return (
      <Stack p={6}>
        <Heading>Access denied</Heading>
        <Text>Please log in using the link in the header.</Text>
      </Stack>
    );
  }
  return (
    <SidebarWithHeader>
      <Head title="Settings" />
      <Stack p={6}>
        <Heading>Administration</Heading>
        <Text>Coming soon.</Text>
      </Stack>
    </SidebarWithHeader>
  );
};

export default AdminPage;
