import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

interface Props {
  children?: React.ReactNode;
}

const colors = {};

const theme = extendTheme({ colors });

function StyleProvider({ children }: Props): JSX.Element {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export default StyleProvider;
