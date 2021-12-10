import { SimpleGrid } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface GridProps<T> {
  items: Array<T> | null | undefined;
  render(item: T): React.ReactElement;
}

export const Grid = function <T extends unknown>({
  items,
  render,
}: GridProps<T>): ReactElement {
  return <SimpleGrid px={8}>{items?.map((item) => render(item))}</SimpleGrid>;
};
