import React from "react";
import { useParams } from "react-router-dom";
import ShowBook from "../components/show-book";
import { Book, useBookQuery } from "../hooks/use-graphql";

function ViewBook(): React.ReactElement {
  const { id } = useParams();
  const { data, loading, error } = useBookQuery({ variables: { id } });

  let showBook = <></>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has occured...</p>;
  if (data && data.book) showBook = <ShowBook book={data.book as Book} />;

  return <>{showBook}</>;
}

export default ViewBook;
