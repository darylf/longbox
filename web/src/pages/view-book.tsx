import React from "react";
import { useParams } from "react-router-dom";
import { Book, useBookQuery } from "../hooks/use-graphql";
import ShowBook from "../components/show-book";

function ViewBook(): React.ReactElement {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useBookQuery({ variables: { id } });

  let showBook = <></>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has occured...</p>;
  if (data && data.book) showBook = <ShowBook book={data.book as Book} />;

  return (
    <>
      View Book
      {showBook}
    </>
  );
}

export default ViewBook;
