import React, { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Series from "./Series";

export const SeriesRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route path=":id" element={<Series />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
