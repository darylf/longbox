import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React, { ReactElement, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const colors = {};

const theme = extendTheme({ colors });

const StyleProvider = function ({ children }: Props): ReactElement {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

StyleProvider.defaultProps = { children: null };

export default StyleProvider;
