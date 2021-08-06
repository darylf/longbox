import React from "react";
import { useParams } from "react-router-dom";
import ShowPublisher from "../components/show-publisher";
import { Publisher, usePublisherQuery } from "../hooks/use-graphql";

function ViewPublisher(): React.ReactElement {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = usePublisherQuery({ variables: { id } });

  let showPublisher = <></>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has occured...</p>;
  if (data && data.publisher)
    showPublisher = <ShowPublisher publisher={data.publisher as Publisher} />;

  return (
    <>
      View Publisher
      {showPublisher}
    </>
  );
}

export default ViewPublisher;
