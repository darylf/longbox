import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AuthenticationProvider,
  getInitialLoginState,
} from "../hooks/use-authentication";
import DataProvider from "./data-provider";
import StyleProvider from "./style-provider";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const initialLoginState = getInitialLoginState();
  return (
    <DataProvider>
      <AuthenticationProvider initialLoginState={initialLoginState}>
        <StyleProvider>
          <Router>{children}</Router>
        </StyleProvider>
      </AuthenticationProvider>
    </DataProvider>
  );
};

AppProvider.defaultProps = { children: <></> };

export default AppProvider;
