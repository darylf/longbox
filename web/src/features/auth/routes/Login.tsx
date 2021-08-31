import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginState } from "../../../hooks/useAuthentication";
import { LoginForm } from "../components/LoginForm";

export const Login = (): ReactElement => {
  const { authenticated } = useLoginState();
  const navigate = useNavigate();
  return authenticated ? <div>Logged in</div> : <LoginForm />;
};
