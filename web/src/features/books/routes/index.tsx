import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Book from "./Book";

export const BooksRoutes = () => {
  return (
    <Routes>
      <Route path=":id" element={<Book />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
