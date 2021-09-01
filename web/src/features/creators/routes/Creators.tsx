import { Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import FormDrawer from "../../../components/FormDrawer";
import CreatorForm from "../components/CreatorForm";
import { CreatorList } from "../components/CreatorList";

const formHtmlId = "creator-form";

export const Creators = (): React.ReactElement => {
  return (
    <Box p="6">
      <Stack>
        <Heading>Creators</Heading>
        <FormDrawer id={formHtmlId} openButtonText="Create Creator">
          <CreatorForm htmlId={formHtmlId} />
        </FormDrawer>
        <CreatorList />
      </Stack>
    </Box>
  );
};

export default Creators;
