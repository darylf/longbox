import React, { ReactElement } from "react";
import { Head } from "../../../components/Head";
import SidebarWithHeader from "../../../components/SidebarWithHeader";
import { LoginForm } from "../components/LoginForm";

export const Login = (): ReactElement => {
  return (
    <SidebarWithHeader>
      <Head title="Login" />
      <LoginForm />
    </SidebarWithHeader>
  );
};
