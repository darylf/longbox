import React, { ReactElement } from "react";
import { Redirect } from "react-router-dom";
import { LoginForm } from "../components/login-form";
import { useLoginState } from "../hooks/use-authentication";

export default function LoginPage(): ReactElement {
  const { authenticated } = useLoginState();
  return authenticated ? <Redirect to="/" /> : <LoginForm />;
}
