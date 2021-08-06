import React from "react";
import { useParams } from "react-router-dom";
import { Series, useSeriesQuery } from "../hooks/use-graphql";
import ShowSeries from "../components/show-series";

function ViewSeries(): React.ReactElement {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useSeriesQuery({ variables: { id } });

  let showSeries = <></>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has occured...</p>;
  if (data && data.series) return <ShowSeries series={data.series as Series} />;

  return (
    <>
      View Series
      {showSeries}
    </>
  );
}

export default ViewSeries;
