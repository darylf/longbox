import { Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import FormDrawer from "../../../components/FormDrawer";
import { Head } from "../../../components/Head";
import PublisherForm from "../components/PublisherForm";
import { PublisherList } from "../components/PublishersList";

const formHtmlId = "publisher-form";

export const Publishers = (): React.ReactElement => {
  return (
    <>
      <Head title="All Publishers" />
      <Box p="6">
        <Stack>
          <Heading>Publishers</Heading>
          <FormDrawer id={formHtmlId} openButtonText="Create Publisher">
            <PublisherForm htmlId={formHtmlId} />
          </FormDrawer>
          <PublisherList />
        </Stack>
      </Box>
    </>
  );
};

export default Publishers;
