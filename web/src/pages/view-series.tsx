import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ShowSeries from "../components/show-series";
import { useLoginState } from "../hooks/use-authentication";
import { Series, useSeriesQuery } from "../hooks/use-graphql";

function ViewSeries(): React.ReactElement {
  const { id } = useParams<{ id: string }>();
  const [series, setSeries] = useState<Series | null>(null);
  const { authenticated } = useLoginState();
  const { loading, error } = useSeriesQuery({
    variables: { id },
    onCompleted: (data) => setSeries(data.series as Series),
  });

  const handleSubmit = (seriesParam: Partial<Series>) => {};

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has occured...</p>;

  return (
    <>
      {series && (
        <>
          <ShowSeries series={series} />
        </>
      )}
    </>
  );
}

export default ViewSeries;
