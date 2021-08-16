import { Link as ChakraLink } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { Link as RouterLink } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
  to: string;
};

const Link = ({ children, to }: Props): ReactElement => (
  <ChakraLink to={to} as={RouterLink}>
    {children}
  </ChakraLink>
);

Link.defaultProps = {
  children: <></>,
};

export default Link;
