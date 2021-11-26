import { Box, Heading, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import FormDrawer from "../../../components/FormDrawer";
import { Head } from "../../../components/Head";
import ProtectedContent from "../../auth/components/ProtectedContent";
import PublisherForm from "../components/PublisherForm";
import { PublisherList } from "../components/PublishersList";

const formHtmlId = "publisher-form";

export const Publishers = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <Head title="All Publishers" />
      <Box p="6">
        <Stack>
          <Heading>Publishers</Heading>
          <ProtectedContent>
            <FormDrawer
              id={formHtmlId}
              isOpen={isOpen}
              onOpen={open}
              onClose={close}
              openButtonText="Create Publisher"
            >
              <PublisherForm htmlId={formHtmlId} />
            </FormDrawer>
          </ProtectedContent>
          <PublisherList />
        </Stack>
      </Box>
    </>
  );
};

export default Publishers;
