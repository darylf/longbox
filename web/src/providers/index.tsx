import * as React from 'react';
import DataProvider from './DataProvider';

interface Props {
  children?: React.ReactNode;
}
function AppProvider({ children }: Props): JSX.Element {
  return <DataProvider>{children}</DataProvider>;
}

export { AppProvider };
