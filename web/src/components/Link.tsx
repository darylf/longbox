import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

type LinkProps = RouterLinkProps & ChakraLinkProps;

const Link = function ({ children, to, color }: LinkProps): ReactElement {
  return (
    <ChakraLink as={RouterLink} to={to} color={color}>
      {children}
    </ChakraLink>
  );
};

Link.defaultProps = {
  children: null,
  color: "blue.500",
};

export default Link;
