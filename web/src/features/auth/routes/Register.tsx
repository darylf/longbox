import React, { ReactElement } from "react";
import { Head } from "../../../components/Head";
import SidebarWithHeader from "../../../components/SidebarWithHeader";
import { RegisterForm } from "../components/RegisterForm";

export const Register = (): ReactElement => {
  return (
    <SidebarWithHeader>
      <Head title="Sign Up" />
      <RegisterForm />
    </SidebarWithHeader>
  );
};
