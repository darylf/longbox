import React from "react";
import { useParams } from "react-router-dom";
import ShowCreator from "../components/show-creator";
import { Creator, useCreatorQuery } from "../hooks/use-graphql";

function ViewCreator(): React.ReactElement {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useCreatorQuery({ variables: { id } });
  let creatorComponent = <></>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has occured...</p>;
  if (data)
    creatorComponent = <ShowCreator creator={data.creator as Creator} />;

  return (
    <>
      View Publisher
      {creatorComponent}
    </>
  );
}

export default ViewCreator;
