import React, { ReactElement } from "react";
import { useLoginState } from "../../../hooks/useAuthentication";

interface ProtectedContentProps {
  children: ReactElement;
}

function ProtectedContent({ children }: ProtectedContentProps): ReactElement {
  const { authenticated } = useLoginState();

  return <>{authenticated && children}</>;
}

export default ProtectedContent;
