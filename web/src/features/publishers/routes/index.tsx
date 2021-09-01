import React, { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Publisher } from "./Publisher";
import { Publishers } from "./Publishers";

export const PublishersRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route path="" element={<Publishers />} />
      <Route path=":id" element={<Publisher />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
