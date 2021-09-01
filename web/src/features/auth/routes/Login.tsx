import React, { ReactElement } from "react";
import { useLoginState } from "../../../hooks/useAuthentication";
import { LoginForm } from "../components/LoginForm";

export const Login = (): ReactElement => {
  const { authenticated } = useLoginState();
  return authenticated ? <div>Logged in</div> : <LoginForm />;
};
