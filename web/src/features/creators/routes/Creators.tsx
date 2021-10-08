import { Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import FormDrawer from "../../../components/FormDrawer";
import { Head } from "../../../components/Head";
import ProtectedContent from "../../auth/components/ProtectedContent";
import CreatorForm from "../components/CreatorForm";
import { CreatorList } from "../components/CreatorList";

const formHtmlId = "creator-form";

export const Creators = (): React.ReactElement => {
  return (
    <>
      <Head title="All Creators" />
      <Box p="6">
        <Stack>
          <Heading>Creators</Heading>
          <ProtectedContent>
            <FormDrawer id={formHtmlId} openButtonText="Create Creator">
              <CreatorForm htmlId={formHtmlId} />
            </FormDrawer>
          </ProtectedContent>
          <CreatorList />
        </Stack>
      </Box>
    </>
  );
};

export default Creators;
