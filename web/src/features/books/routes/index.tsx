import React, { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Book from "./Book";

export const BooksRoutes = function (): ReactElement {
  return (
    <Routes>
      <Route path=":id" element={<Book />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
