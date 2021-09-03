import React, { ReactElement } from "react";
import { Head } from "../../../components/Head";
import { RegisterForm } from "../components/RegisterForm";

export const Register = (): ReactElement => {
  return (
    <>
      <Head title="Sign Up" />
      <RegisterForm />
    </>
  );
};
