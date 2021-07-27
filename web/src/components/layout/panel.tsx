import { Box, Heading, ListItem, OrderedList } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface PanelProps<T> {
  headerText: string;
  items: Array<T>;
  render: (item: T) => ReactElement;
}

function Panel<T>({ headerText, items, render }: PanelProps<T>): ReactElement {
  return (
    <Box border="1px solid" borderColor="gray.300" borderRadius="md" p="7">
      <Heading as="h1" size="md">
        {headerText}
      </Heading>
      <OrderedList>
        {items.map((item, key) => (
          <ListItem key={key}>{render(item)}</ListItem>
        ))}
      </OrderedList>
    </Box>
  );
}

export default Panel;
