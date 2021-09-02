import { Heading, Stack } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Head } from "../../../components/Head";
import SidebarWithHeader from "../../../components/SidebarWithHeader";
import FeaturedPublishers from "../../publishers/components/FeaturedPublishers";
import FeaturedSeriesList from "../../series/components/FeaturedSeriesList";

function BrowseCollection(): ReactElement {
  return (
    <SidebarWithHeader>
      <Head title="Explore" />
      <Stack>
        <Heading>Explore</Heading>
        <FeaturedPublishers />
        <FeaturedSeriesList />
      </Stack>
    </SidebarWithHeader>
  );
}

export default BrowseCollection;
