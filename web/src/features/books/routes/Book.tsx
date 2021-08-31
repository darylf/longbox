import React from "react";
import { useParams } from "react-router-dom";
import { Book as BookObj } from "../../../types";
import { useBookQuery } from "../api/book.query.generated";
import ShowBook from "../components/ShowBook";

export default function Book(): React.ReactElement {
  const { id } = useParams();
  const { data, loading, error } = useBookQuery({ variables: { id } });

  let showBook = <></>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has occured...</p>;
  if (data && data.book) showBook = <ShowBook book={data.book as BookObj} />;

  return <>{showBook}</>;
}
