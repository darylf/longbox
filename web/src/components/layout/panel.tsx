import * as React from "react";
import { Box, Heading, ListItem, OrderedList } from "@chakra-ui/react";

interface PanelProps {
  headerText: string;
  items: Array<string>;
}

const Panel = ({ headerText, items }: PanelProps): JSX.Element => (
  <Box border="1px solid" borderColor="gray.300" borderRadius="md" p="7">
    <Heading as="h1" size="md">
      {headerText}
    </Heading>
    <OrderedList>
      {items.map((item) => (
        <ListItem>{item}</ListItem>
      ))}
    </OrderedList>
  </Box>
);

export default Panel;
