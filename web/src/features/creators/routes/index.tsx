import React, { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Creator from "./Creator";

export const CreatorsRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route path=":id" element={<Creator />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
