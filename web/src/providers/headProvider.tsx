import React, { ReactElement } from "react";
import { HelmetProvider } from "react-helmet-async";

interface HeadProviderProps {
  children: ReactElement;
}
const HeadProvider = function ({ children }: HeadProviderProps) {
  return <HelmetProvider>{children}</HelmetProvider>;
};

export default HeadProvider;
