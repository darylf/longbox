import React, { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Series from "./Series";

export const SeriesRoutes = function (): ReactElement {
  return (
    <Routes>
      <Route path=":id" element={<Series />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
