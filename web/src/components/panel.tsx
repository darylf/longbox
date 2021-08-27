import { Box, Heading, ListItem, OrderedList, Stack } from "@chakra-ui/react";
import React, { Key, ReactElement } from "react";

interface PanelProps<T> {
  headerText: string;
  items: Array<T>;
  render: (item: T) => ReactElement;
}

interface ObjId {
  id: Key;
}

function Panel<T extends ObjId>({
  headerText,
  items,
  render,
}: PanelProps<T>): ReactElement {
  return (
    <Box border="1px solid" borderColor="gray.300" borderRadius="md" p="7">
      <Stack>
        <Heading as="h1" size="md">
          {headerText}
        </Heading>
        <OrderedList>
          {items.map((item) => (
            <ListItem key={item.id}>{render(item)}</ListItem>
          ))}
        </OrderedList>
      </Stack>
    </Box>
  );
}

export default Panel;
