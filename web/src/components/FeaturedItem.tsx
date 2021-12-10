import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Link from "./Link";

interface FeaturedItemProps<T> {
  title: string;
  moreLinkText: string;
  moreLinkUrl: string;
  children: (item: T) => React.ReactNode;
  items: T[];
}
const FeaturedItem = function <T>({
  children,
  items,
  moreLinkText,
  moreLinkUrl,
  title,
}: FeaturedItemProps<T>) {
  return (
    <Box>
      <Heading size="lg">{title}</Heading>
      <Flex>{items.map((item) => children(item))}</Flex>
      <Link to={moreLinkUrl}>{moreLinkText}</Link>
    </Box>
  );
};

export default FeaturedItem;
