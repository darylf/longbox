import { Box, Heading, ListItem, OrderedList, Stack } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface PanelProps<T> {
  headerText: string;
  items: Array<T>;
  render: (item: T) => ReactElement;
}

function Panel<T>({ headerText, items, render }: PanelProps<T>): ReactElement {
  return (
    <Box border="1px solid" borderColor="gray.300" borderRadius="md" p="7">
      <Stack>
        <Heading as="h1" size="md">
          {headerText}
        </Heading>
        <OrderedList>
          {items.map((item, key) => (
            /* eslint-disable react/no-array-index-key */
            <ListItem key={key}>{render(item)}</ListItem>
            /* eslint-enable react/no-array-index-key */
          ))}
        </OrderedList>
      </Stack>
    </Box>
  );
}

export default Panel;
