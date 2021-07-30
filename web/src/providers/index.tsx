import React, { ReactElement, ReactNode } from "react";
import DataProvider from "./data-provider";
import StyleProvider from "./style-provider";
import {
  AuthenticationProvider,
  getInitialLoginState,
} from "../hooks/use-authentication";
export { default as DataProvider } from "./data-provider";
export { default as StyleProvider } from "./style-provider";

interface Props {
  children?: ReactNode;
}

function AppProvider({ children }: Props): ReactElement {
  const initialLoginState = getInitialLoginState();
  return (
    <DataProvider>
      <AuthenticationProvider initialLoginState={initialLoginState}>
        <StyleProvider>{children}</StyleProvider>
      </AuthenticationProvider>
    </DataProvider>
  );
}

export default AppProvider;
