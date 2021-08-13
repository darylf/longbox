import { Link as ChakraLink } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
  to: string;
}
const Link = ({ children, to }: Props) => (
  <ChakraLink to={to} as={RouterLink}>
    {children}
  </ChakraLink>
);

export default Link;
