import React, { ReactElement, ReactNode } from "react";
import {
  AuthenticationProvider,
  getInitialLoginState,
} from "../hooks/use-authentication";
import DataProvider from "./data-provider";
import StyleProvider from "./style-provider";

export { default as DataProvider } from "./data-provider";
export { default as StyleProvider } from "./style-provider";

interface Props {
  children?: ReactNode;
}

const AppProvider = ({ children }: Props): ReactElement => {
  const initialLoginState = getInitialLoginState();
  return (
    <DataProvider>
      <AuthenticationProvider initialLoginState={initialLoginState}>
        <StyleProvider>{children}</StyleProvider>
      </AuthenticationProvider>
    </DataProvider>
  );
};

AppProvider.defaultProps = { children: <></> };

export default AppProvider;
