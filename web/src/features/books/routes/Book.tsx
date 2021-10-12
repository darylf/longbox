import React from "react";
import { useParams } from "react-router-dom";
import { Head } from "../../../components/Head";
import { Book as BookObj } from "../../../types";
import { useBookQuery } from "../api/book.query.generated";
import ShowBook from "../components/ShowBook";

export default function Book(): React.ReactElement {
  const { id } = useParams();
  if (id === undefined) return <>Invalid ID</>;

  const { data, loading, error } = useBookQuery({ variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has occured...</p>;

  const book = data?.book as BookObj;

  return (
    <>
      <Head title={book.displayName} />
      <ShowBook book={book} />
    </>
  );
}
