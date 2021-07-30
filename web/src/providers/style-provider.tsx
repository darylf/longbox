import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React, { ReactElement, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const colors = {};

const theme = extendTheme({ colors });

function StyleProvider({ children }: Props): ReactElement {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

StyleProvider.defaultProps = { children: <></> };

export default StyleProvider;
