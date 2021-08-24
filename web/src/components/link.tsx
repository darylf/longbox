import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps extends ChakraLinkProps {
  children?: React.ReactNode;
  to: string;
}

const Link = ({ children, to }: LinkProps): ReactElement => (
  <ChakraLink as={RouterLink} to={to}>
    {children}
  </ChakraLink>
);

Link.defaultProps = {
  children: <></>,
};

export default Link;
