import React from "react";
import { useParams } from "react-router-dom";
import { Head } from "../../../components/Head";
import { Creator as CreatorObj } from "../../../types";
import { useCreatorQuery } from "../api/creator.query.generated";
import ShowCreator from "../components/ShowCreator";

function Creator(): React.ReactElement {
  const { id } = useParams();
  const { data, loading, error } = useCreatorQuery({ variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has occured...</p>;

  const creator = data?.creator as CreatorObj;

  return (
    <>
      <Head title={`${creator.firstName} ${creator.lastName}`} />
      <ShowCreator creator={creator} />
    </>
  );
}

export default Creator;
