import React, { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import User from "./User";
import Users from "./Users";

export const UsersRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route path="" element={<Users />} />
      <Route path=":id" element={<User />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
