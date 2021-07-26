import * as React from "react";
import StyleProvider from "./style-provider";
import DataProvider from "./data-provider";
export { default as DataProvider } from "./data-provider";
export { default as StyleProvider } from "./style-provider";

interface Props {
  children?: React.ReactNode;
}

function AppProvider({ children }: Props): JSX.Element {
  return (
    <DataProvider>
      <StyleProvider>{children}</StyleProvider>
    </DataProvider>
  );
}

export default AppProvider;
