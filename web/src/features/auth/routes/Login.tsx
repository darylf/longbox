import React, { ReactElement } from "react";
import { Head } from "../../../components/Head";
import { LoginForm } from "../components/LoginForm";

export const Login = function (): ReactElement {
  return (
    <>
      <Head title="Login" />
      <LoginForm />
    </>
  );
};
