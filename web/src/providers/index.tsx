import React, { ReactElement, ReactNode } from "react";
import DataProvider from "./data-provider";
import StyleProvider from "./style-provider";
export { default as DataProvider } from "./data-provider";
export { default as StyleProvider } from "./style-provider";

interface Props {
  children?: ReactNode;
}

function AppProvider({ children }: Props): ReactElement {
  return (
    <DataProvider>
      <StyleProvider>{children}</StyleProvider>
    </DataProvider>
  );
}

export default AppProvider;
