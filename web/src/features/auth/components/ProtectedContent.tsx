import React, { ReactElement } from "react";
import { useLoginState } from "../../../hooks/useAuthentication";

interface ProtectedContentProps {
  children: ReactElement;
}

const ProtectedContent = function ({
  children,
}: ProtectedContentProps): ReactElement {
  const { authenticated } = useLoginState();

  /* eslint-disable react/jsx-no-useless-fragment */
  return <>{authenticated && children}</>;
  /* eslint-enable react/jsx-no-useless-fragment */
};

export default ProtectedContent;
