import { Stack } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Head } from "../../../components/Head";
import FeaturedPublishers from "../../publishers/components/FeaturedPublishers";
import FeaturedSeriesList from "../../series/components/FeaturedSeriesList";

function BrowseCollection(): ReactElement {
  return (
    <>
      <Head title="Explore" />
      <Stack>
        <FeaturedPublishers />
        <FeaturedSeriesList />
      </Stack>
    </>
  );
}

export default BrowseCollection;
