import { Button, Spinner } from "@chakra-ui/react";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AuthenticationProvider,
  getInitialLoginState,
} from "../hooks/use-authentication";
import DataProvider from "./dataProvider";
import StyleProvider from "./styleProvider";

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  const initialLoginState = getInitialLoginState();
  return (
    <React.Suspense
      fallback={
        <div className="h-screen w-screen flex items-center justify-center">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <DataProvider>
          <AuthenticationProvider initialLoginState={initialLoginState}>
            <StyleProvider>
              <Router>{children}</Router>
            </StyleProvider>
          </AuthenticationProvider>
        </DataProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default AppProvider;
