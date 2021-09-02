import React, { ReactElement } from "react";
import { HelmetProvider } from "react-helmet-async";

interface HeadProviderProps {
  children: ReactElement;
}
const HeadProvider = ({ children }: HeadProviderProps) => (
  <HelmetProvider>{children}</HelmetProvider>
);

export default HeadProvider;
